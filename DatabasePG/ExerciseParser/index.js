const pg = require('pg')
const { Pool } = pg
const fs = require('fs')
const { parse } = require('csv-parse')
const dotenv = require('dotenv')
dotenv.config()

const rows = new Set()

fs.createReadStream('strong.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    rows.add(row[3])
  })
  .on('error', function (error) {
    console.log(error.message)
  })
  .on('end', async function () {
    await insertIntoMySql(rows)
    console.log('finished parsing')
  })

async function insertIntoMySql(rows) {
  const pool = new Pool({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  })

  pool.connect()

  for (const name of rows) {
    await pool.query(`insert into exercises (name) values ('${name}')`)
  }
  console.log('All done')
}
