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

pool.connect()

export async function getAllSplits() {
  const { rows } = await pool.query(`SELECT * FROM splits`)
  return rows
}

export async function getCurrentSplit() {
  const { rows } = await pool.query(`SELECT name FROM splits WHERE active = 1`)
  return rows[0]
}
