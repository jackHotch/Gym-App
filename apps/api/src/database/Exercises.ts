import { pool } from '../db'
import dotenv from 'dotenv'
dotenv.config()

export async function getAllExercises(userId: string) {
  const client = await pool.connect()
  const { rows } = await pool.query(
    `SELECT * FROM exercises WHERE is_default = 1 OR user_id = $1`,
    [userId]
  )
  client.release()
  return rows
}

export async function createExercise(userId: string, name: string) {
  const client = await pool.connect()
  await pool.query(`INSERT INTO exercises (name, user_id) VALUES ($1, $2)`, [
    name,
    userId,
  ])
  client.release()
}
