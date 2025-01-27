import express from 'express'
import cors from 'cors'
import { getAllSplits } from './database/Splits'
const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'gymapp/api' })
})

app.get('/cronjob', async (req, res) => {
  const rows = await getAllSplits()
  res.json(rows)
})

import exerciseRouter from './routes/Exercises'
app.use('/api/exercises', exerciseRouter)

import splitsRouter from './routes/Splits'
app.use('/api/splits', splitsRouter)

import weightRouter from './routes/Weight'
app.use('/api/weight', weightRouter)

import workoutRouter from './routes/Workouts'
app.use('/api/workout', workoutRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
