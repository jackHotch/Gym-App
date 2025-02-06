import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'
import { IUser } from '../globals'

dotenv.config()

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: parseInt(process.env.POSTGRES_PORT),
})

pool.connect()

export async function signUp(user: IUser) {
  await pool.query(
    `INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4)`,
    [user.email, user.password, user.firstName, user.lastName]
  )
}

export async function findUser(email: string) {
  const { rows } = await pool.query(`SELECT email FROM users WHERE email = '${email}'`)
  return rows
}
