const fs = require('fs')
const { parse } = require('csv-parse')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

let dates = new Set()
let datesHeaders = 'date'

fs.createReadStream('strong.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    // get all unique dates
    let date = row[0].substring(0, 10)
    dates.add(date)
  })
  .on('error', function (error) {
    console.log(error.message)
  })
  .on('end', async function () {
    createCsvFile('workouts.csv', datesHeaders, dates)
    console.log('finished parsing')
  })

function createCsvFile(fileName, headers, rows) {
  const filePath = path.join(__dirname, fileName)

  let csvContent
  for (const date of rows) {
    csvContent += `${date}\n`
  }

  csvData = `${headers}\n${csvContent}`

  fs.writeFile(filePath, csvData, (err) => {
    if (err) {
      console.error('Error writing the CSV file:', err)
    } else {
      console.log('CSV file created successfully!')
    }
  })
}
