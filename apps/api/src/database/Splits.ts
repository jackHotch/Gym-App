import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
})
pool.connect()

export async function cronjob() {
  const { rows } = await pool.query(`SELECT * FROM splits`)
  return rows
}

export async function getAllSplits(userId: string) {
  const { rows } = await pool.query(`SELECT * FROM splits WHERE user_id = $1`, [userId])
  return rows
}

export async function getCurrentSplit(userId: string) {
  const { rows } = await pool.query(
    `SELECT name FROM splits WHERE active = 1 AND user_id = $1`,
    [userId]
  )
  return rows
}
