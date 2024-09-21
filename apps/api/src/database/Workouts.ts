import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'
import { IExercises } from '../globals'

dotenv.config()

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: parseInt(process.env.POSTGRES_PORT),
})

pool.connect().then(() => {
  console.log('COnnected!')
})

export async function getLastWorkoutNumber() {
  const { rows } = await pool.query(
    'SELECT "Workout_Number" FROM workouts ORDER BY id DESC LIMIT 1'
  )
  return rows[0]['Workout_Number']
}

export async function createWorkout(workout: IExercises[]) {
  const rows = []
  const d = new Date()
  const date = d.toLocaleDateString()
  const time = d.toTimeString().substring(0, 8)
  let workoutNumber = await getLastWorkoutNumber()
  workoutNumber = parseInt(workoutNumber) + 1
  workout.map((value) => {
    const name = value.name
    const notes = value.notes
    value.sets.map((set, i) => {
      const newRow = []
      newRow.push(date)
      newRow.push(time)
      newRow.push(workoutNumber)
      newRow.push(name)
      newRow.push(i + 1)
      newRow.push(set.weight)
      newRow.push(set.reps)
      newRow.push(notes)
      newRow.push(set.rpe)
      rows.push(newRow)
    })
  })

  for (let i = 0; i < rows.length; i++) {
    await pool.query(
      `insert into workouts ("Date", "Start_Time", "Workout_Number", "Exercise_Name", "Set_Order", "Weight", "Reps", "Notes", "RPE") values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      rows[i]
    )
  }
}
