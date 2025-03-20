const pg = require('pg')
const { Pool } = pg
const fs = require('fs')
const { parse } = require('csv-parse')
const { stringify } = require('csv-stringify')
const dotenv = require('dotenv')
dotenv.config()

let rows = []
let exerciseNames = []

fs.createReadStream('exercise_name.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    exerciseNames.add(row[0])
  })
  .on('error', function (error) {
    console.log(error.message)
  })
  .on('end', async function () {
    console.log('finished parsing exercise names')
  })

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
    eName = row[3]
    for (let i; i < exerciseNames.length; i++) {
      if (exerciseNames[i] === eName) newRow.push(i + 1)
    }

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
    console.log('finished parsing workouts')
  })

async function createCsvFile(filePath, data) {
  const columns = {}

  const csvString = await stringify(data, { header: true, columns: columns })

  fs.writeFile(filePath, csvString, (err) => {
    if (err) {
      console.error('Error writing to CSV file:', err)
    } else {
      console.log(`Successfully wrote to ${filePath}`)
    }
  })
}
