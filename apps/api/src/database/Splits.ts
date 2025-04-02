import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
})
pool.connect()

export async function getAllSplits() {
  const { rows } = await pool.query(`SELECT * FROM splits`)
  return rows
}

export async function getCurrentSplit() {
  const { rows } = await pool.query(`SELECT name FROM splits WHERE active = 1`)
  return rows
}
