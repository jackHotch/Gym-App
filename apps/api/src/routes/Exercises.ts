import express, { Request, Response } from 'express'
const router = express.Router()

import { getAllExercises, createExercise } from '../database/Exercises'

router.get('/', async (req: Request, res: Response) => {
  const rows = await getAllExercises()
  res.json(rows)
})

router.post('/create', async (req: Request, res: Response) => {
  const name = req.body.name
  await createExercise(name)
  res.sendStatus(201)
})

export default router
