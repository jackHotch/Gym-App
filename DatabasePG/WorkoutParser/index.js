const pg = require('pg')
const { Pool } = pg
const fs = require('fs')
const { parse } = require('csv-parse')
const dotenv = require('dotenv')
dotenv.config()

let rows = []

fs.createReadStream('strong.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    let newRow = []

    let date = row[0].substring(0, 10)
    let startTime = row[0].substring(11, 19)

    newRow.push(date)
    newRow.push(startTime)
    newRow.push(row[1])
    newRow.push(row[2])
    newRow.push(row[3])

    newRow.push(parseInt(row[4]))
    newRow.push(parseFloat(row[5]))
    newRow.push(parseInt(row[6]))
    newRow.push(parseInt(row[7]))
    newRow.push(parseInt(row[8]))
    newRow.push(row[9])
    newRow.push(row[10])
    if (row[11]) row[11] = parseFloat(row[11])
    newRow.push(row[11])
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
      `insert into workouts ("Date", "Start_Time", "Workout_Number", "Duration", "Exercise_Name", "Set_Order", "Weight", "Reps", "Distance", "Seconds", "Notes", "Workout_Notes", "RPE") values ('${rows[i][0]}', '${rows[i][1]}', '${rows[i][2]}', '${rows[i][3]}', '${rows[i][4]}', '${rows[i][5]}', '${rows[i][6]}', '${rows[i][7]}', '${rows[i][8]}', '${rows[i][9]}', '${rows[i][10]}', '${rows[i][11]}', '${rows[i][12]}')`
    )
  }
  console.log('all done')
}
