const pg = require('pg')
const { Pool } = pg
const fs = require('fs')
const { parse } = require('csv-parse')
const dotenv = require('dotenv')
dotenv.config()

let rows = []

fs.createReadStream('weight.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    let newRow = []

    newRow.push(row[1])
    newRow.push(row[2])
    rows.push(newRow)
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

  for (let i = 0; i < rows.length; i++) {
    await pool.query(
      `insert into weight (weight, date) values ('${rows[i][0]}', '${rows[i][1]}')`
    )
  }
  console.log('All done')
}
