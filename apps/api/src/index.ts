import express from 'express'
import cors from 'cors'
const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Hello!' })
})

app.get('/cronjob', (req, res) => {
  res.json({ message: 'This is for the cronjob' })
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
