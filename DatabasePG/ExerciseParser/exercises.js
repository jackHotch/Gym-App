const fs = require('fs')
const { parse } = require('csv-parse')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

let exerciseNames = new Set()
let exerciseHeaders = 'name'

fs.createReadStream('strong.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    // get all unique exercises
    exerciseNames.add(row[3])
  })
  .on('error', function (error) {
    console.log(error.message)
  })
  .on('end', async function () {
    createCsvFile('exercises.csv', exerciseHeaders, exerciseNames)
    console.log('finished parsing')
  })

function createCsvFile(fileName, headers, rows) {
  const filePath = path.join(__dirname, fileName)
  console.log(rows)

  let csvContent
  let id = 1
  let exerciseList = []
  for (const e of rows) {
    csvContent += e + '\n'
    exerciseList.push(e)
    id++
  }

  csvData = `${headers}\n${csvContent}`

  fs.writeFile(filePath, csvData, (err) => {
    if (err) {
      console.error('Error writing the CSV file:', err)
    } else {
      console.log('CSV file created successfully!')
    }
  })

  fs.writeFile(
    path.join(__dirname, 'exercises.txt'),
    JSON.stringify(exerciseList),
    (err) => {
      if (err) {
        console.error('Error writing the CSV file:', err)
      } else {
        console.log('CSV file created successfully!')
      }
    }
  )
}
