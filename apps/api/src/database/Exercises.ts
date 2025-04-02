import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
})

pool.connect()

export async function getAllExercises() {
  const { rows } = await pool.query(`SELECT * FROM exercises`)
  return rows
}

export async function createExercise(name: string) {
  await pool.query(`INSERT INTO exercises (name) VALUES ($1)`, [name])
}
