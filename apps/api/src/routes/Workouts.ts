import express, { Request, Response } from 'express'
const router = express.Router()

import { createWorkout, getLastWorkoutNumber } from '../database/Workouts'

router.post('/create', async (req: Request, res: Response) => {
  const workout = req.body
  await createWorkout(workout)
  res.status(201).send('Workout Created')
})

router.get('/number', async (req: Request, res: Response) => {
  let number = await getLastWorkoutNumber()
  number = parseInt(number)
  res.json(number)
})

export default router
