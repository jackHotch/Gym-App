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

export async function getAllWeight() {
  const [rows] = await pool.query('SELECT * FROM weight')
  return rows
}

export async function getWeight(id: string) {
  const [row] = await pool.query(
    `
    SELECT * 
    FROM weight
    WHERE id = ?
    `,
    [id]
  )
  return row
}

export async function createEntry(weight: number, date: string) {
  await pool.query('INSERT INTO `weight` (`weight`, `date`) VALUES (?, ?)', [
    weight,
    date,
  ])
}

export async function deleteEntry(id: string) {
  await pool.query('DELETE FROM `weight` WHERE id = ?', [id])
}
