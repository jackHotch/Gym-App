import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'
import { IUser } from '../globals'

dotenv.config()

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
})

pool.connect()

export async function createUser(user: IUser) {
  await pool.query(
    `INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4)`,
    [user.email, user.password, user.firstName, user.lastName]
  )
}

export async function findUserByEmail(email: string) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
  if (rows.length === 0) return null
  else return rows[0] as IUser
}

export async function findUserById(id: string) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
  if (rows.length === 0) return null
  else return rows[0] as IUser
}

export async function deleteUser(id: string) {
  await pool.query(`DELETE FROM users WHERE id = $1`, [id])
}
