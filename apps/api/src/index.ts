import express from 'express'
import cors from 'cors'
import { cronjob } from './database/Splits'
const app = express()
const PORT = 8080
const VERSION = process.env.VERSION

app.use(express.json())
app.use(
  cors({
    origin: ['https://jackhotchkiss-gym-app.vercel.app'],
  })
)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.json({ message: 'gymapp/api' })
})

app.get('/cronjob', async (req, res) => {
  const rows = await cronjob()
  res.json(rows)
})

import exercisesRouter from './routes/Exercises'
app.use(`/${VERSION}/exercises`, exercisesRouter)

import splitsRouter from './routes/Splits'
app.use(`/${VERSION}/splits`, splitsRouter)

import weightsRouter from './routes/Weights'
app.use(`/${VERSION}/weights`, weightsRouter)

import workoutsRouter from './routes/Workouts'
app.use(`/${VERSION}/workouts`, workoutsRouter)

export default app
