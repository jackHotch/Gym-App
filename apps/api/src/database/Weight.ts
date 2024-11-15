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

export async function getAllWeight() {
  const { rows } = await pool.query(`SELECT * FROM weight`)
  return rows
}

export async function getWeight(id: string) {
  const { rows } = await pool.query(`SELECT * FROM weight WHERE id = $1`, [id])
  return rows[0]
}

export async function createEntry(weight: number, date: string) {
  await pool.query(`INSERT INTO weight (weight, date) VALUES ($1, $2)`, [weight, date])
}

export async function deleteEntry(id: string) {
  await pool.query(`DELETE FROM weight WHERE id = $1`, [id])
}

export async function getCurrentWeight() {
  const { rows } = await pool.query(
    `SELECT "weight" FROM weight ORDER BY id DESC LIMIT 1`
  )
  return rows[0]['weight']
}
