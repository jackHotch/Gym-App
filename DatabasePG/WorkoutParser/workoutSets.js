const fs = require('fs')
const { parse } = require('csv-parse')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

let rows = []
let rowsHeaders = 'exercise_id,set_order,weight,reps,notes,rpe'
const exerciseNames = [
  'Squat (Barbell)',
  'Bulgarian Split Squat',
  'Leg Extension (Machine)',
  'Seated Leg Curl (Machine)',
  'Bench Press (Barbell)',
  'Machine Incline Chest Press',
  'Dumbbell Overhead Press',
  'Cable Chest Fly',
  'Chest Dip',
  'Lateral Raise (Dumbbell)',
  'Triceps Extension (Dumbbell)',
  'Tricep Extension Rope',
  'Pull Up',
  'Hammer Strength Lat Pulldown',
  'Cross Body Rear Delt Fly',
  'Cable Row',
  'Lat Pushdown',
  'Preacher Curl (Barbell)',
  'Leg Press',
  'Romanian Deadlift (Barbell)',
  'Goblet Squat (Kettlebell)',
  'Lunge (Dumbbell)',
  'Incline Bench Press (Barbell)',
  'Arnold Press (Dumbbell)',
  'Bench Press (Dumbbell)',
  'Low To High Cable Fly',
  'Skullcrusher (Barbell)',
  'Triceps Pushdown (Cable - Straight Bar)',
  'Romanian Deadlift (Dumbbell)',
  'Seated Calf Raise (Machine)',
  'Calf Press on Seated Leg Press',
  'Incline Bench Press (Dumbbell)',
  'Dumbbell Shoulder Press',
  'Machine Chest Press',
  'Bent Over Row (Barbell)',
  'Machine Row',
  'Lat Pulldown (Cable)',
  'Incline Curl (Dumbbell)',
  'Bicep Curl (Barbell)',
  'Deadlift (Barbell)',
  'Seated Leg Press (Machine)',
  'Seated Overhead Press (Smith Machine)',
  'Shoulder Press (Machine)',
  'Seated Tricep Extension (Single Arm)',
  'Chest Supported Row',
  'Seated Row (Cable)',
  'Seated Calf Raise (Plate Loaded)',
  'Seated Overhead Press (Dumbbell)',
  'Decline Cable Chest Fly',
  'Lat Pullover',
  'Calf Press On Seated Leg Press (Single Leg)',
  'Tricep Cable Extension (Single Arm/with handle)',
  'Reverse Fly (Machine)',
  'Bent Over Row - Underhand (Barbell)',
  'Lat Pulldown (Machine)',
  'Calf Press on Leg Press',
  'Hack Squat',
  'Seated Row (Machine)',
  'Single Arm Preacher Curl (Dumbbell)',
  'Hammer Curl (Dumbbell)',
  'Lat Pulldown (Single Arm)',
  'Lateral Raise (Cable)',
  'Tricep Cable Extension (Single Arm)',
  'Pec Deck (Machine)',
  'Seated Curl (Dumbbell) ',
  'Front Raise (Cable)',
  'Reverse Fly (Cable)',
  'Shrug (Barbell)',
  'Hammer Strength Chest Press',
  'Seated Shoulder Press Single Arm (Dumbbell)',
  'High To Low Rear Delt Fly',
  'Lying Leg Curl (Machine)',
  'Overhead Cable Tricep Extension',
  'Hack Squat (light)',
  'Leg Extension (Single Leg)',
  'Leg Press (Single Leg)',
  'Lat Pullover Rope',
  'Bicep Curl (Cable)',
  'Cross Body Tricep Extension',
  'Overhead Press (Barbell)',
  'Hip Abductor (Machine)',
  'Face Pull (Cable)',
  'Flat Leg Raise',
  'Shrug (Dumbbell)',
  'Reverse 21S Incline Curl (Dumbbell)',
  'Reverse 21S Tricep Pressdown',
  'Band Pull Apart',
  'Box Squat (Barbell)',
  'Hanging Leg Raise',
  'Chin Up',
  'Incline Row (Dumbbell)',
  'Concentration Curl (Dumbbell)',
  'Bench Press - Close Grip (Barbell)',
  'Upright Row (Barbell)',
  'Floor Skullcrusher (Barbell)',
  'Block Pull',
  'Pendlay Row (Barbell)',
  'Reverse Fly (Dumbbell)',
  'Glute Ham Raise',
  'Helms Row',
  'Lateral Raise (Machine)',
  'Incline Chest Press (Machine)',
  'Standing Calf Raise (Machine)',
  'Tricep Dip (Machine)',
  'Shoulder Press (Plate Loaded)',
  'Mid Row',
  'Preacher Curl (Machine)',
  'High To Low Cable Fly',
  'Behind The Back Lateral Raise',
  'Cable Y-Raise',
  'Lat Pulldown - Underhand (Cable)',
  'Seated Overhead Press (Barbell)',
  'Chest Press (Machine)',
  'Horizontal Chest Supported Row',
  'Press Around',
  'Single Arm Cable Y Raise',
  'Triceps Extension (Cable)',
  'Bicep Curl (Dumbbell)',
  'Stiff Leg Deadlift (Barbell)',
  'Katana Extensions ',
  'Hip Adductor (Machine)',
  'Single Arm Front Raise (Cable)',
  'Overhead Cable Tricep Extension (Single Arm)',
  'High To Low Cable Fly (Single Arm)',
  'Mid Row (Upper Back)',
  'Single Arm Bicep Curl (cable)',
  'Hip Thrust (Machine)',
  'Hammer Curl (Cable)',
  'Seated Leg Curl (Single Leg)',
  'Skullcrusher (Dumbbell)',
  'Hip Thrust (Barbell)',
  'Wrist Curls (Cable)',
  'Triceps Extension (Machine)',
  'Wrist Curls (Dumbbell)',
]

fs.createReadStream('strong.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    // get all columns for workout_sets
    let newRow = []

    newRow.push(exerciseNames.indexOf(row[3]) + 1)
    newRow.push(parseInt(row[4]))
    newRow.push(roundToHalf(parseFloat(row[5])))
    newRow.push(parseInt(row[6]))
    newRow.push(`\"${row[9]}\"`)
    if (row[11]) row[11] = parseFloat(row[11])
    newRow.push(row[11])
    rows.push(newRow)
  })
  .on('error', function (error) {
    console.log(error.message)
  })
  .on('end', async function () {
    createCsvFile('workout_sets.csv', rowsHeaders, rows)
    console.log('finished parsing')
  })

function createCsvFile(fileName, headers, rows) {
  const filePath = path.join(__dirname, fileName)

  let csvContent = rows.map((e) => e.join(',')).join('\n')

  csvData = `${headers}\n${csvContent}`

  fs.writeFile(filePath, csvData, (err) => {
    if (err) {
      console.error('Error writing the CSV file:', err)
    } else {
      console.log('CSV file created successfully!')
    }
  })
}

function roundToHalf(number) {
  return Math.round(number * 2) / 2
}
