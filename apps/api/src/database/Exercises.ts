import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'
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

export async function getAllExercises() {
  const { rows } = await pool.query(`SELECT * FROM exercises`)
  return rows
}

export async function createExercise(name: string) {
  await pool.query(`INSERT INTO exercises (name) VALUES ($1)`, [name])
}
