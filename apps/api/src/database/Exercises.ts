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

export async function getAllExercises() {
  const [rows] = await pool.query(`SELECT * FROM exercises`)
  return rows
}

export async function createExercise(name: string) {
  await pool.query('INSERT INTO `exercises` (`name`) VALUES (?)', [name])
}
