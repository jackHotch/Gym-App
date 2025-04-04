import express, { Request, Response } from 'express'
const router = express.Router()

import { getAllExercises, createExercise } from '../database/Exercises'

router.get('/', async (req: Request, res: Response) => {
  const userId = req.body.userId
  const rows = await getAllExercises(userId)
  res.json(rows)
})

router.post('/', async (req: Request, res: Response) => {
  const { userId, name } = req.body
  await createExercise(userId, name)
  res.sendStatus(201)
})

export default router
