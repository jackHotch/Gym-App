import express, { Request, Response } from 'express'
const router = express.Router()

import { getCurrentWorkoutNumber, getWorkout, insertWorkout } from '../database/Workouts'

router.get('/', async (req: Request, res: Response) => {
  const { userId, workoutId } = req.body
  const rows = await getWorkout(userId, workoutId)

  if (rows.length === 0) res.status(400).json({ error: 'No matching records' })
  else res.status(200).json(rows)
})

router.post('/', async (req: Request, res: Response) => {
  const { userId, workout } = req.body
  await insertWorkout(userId, workout)
  res.sendStatus(201)
})

router.get('/count', async (req: Request, res: Response) => {
  const userId = req.body.userId
  const rows = await getCurrentWorkoutNumber(userId)
  res.json(rows[0])
})

export default router
