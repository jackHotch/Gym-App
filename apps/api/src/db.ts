import pg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pg
dotenv.config()

export const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
})
