import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise()

export async function getAllSplits() {
  const [rows] = await pool.query(`SELECT * FROM splits`)
  return rows
}

export async function getCurrentSplit() {
  const [row] = await pool.query(`
    SELECT name
    FROM splits
    WHERE active = 1
    `)
  return row[0]
}
