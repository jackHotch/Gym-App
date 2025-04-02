import express, { Request, Response } from 'express'
const router = express.Router()

import {
  createEntry,
  getAllWeight,
  getWeight,
  deleteEntry,
  getCurrentWeight,
} from '../database/Weights'

router.get('/', async (req: Request, res: Response) => {
  const rows = await getAllWeight()
  res.json(rows)
})

router.post('/', async (req: Request, res: Response) => {
  const weight = req.body.weight
  const date = req.body.date
  await createEntry(weight, date)
  res.sendStatus(201)
})

router.get('/current', async (req: Request, res: Response) => {
  const row = await getCurrentWeight()
  res.json(row)
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const row = await getWeight(id)
  res.send(row)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  await deleteEntry(id)
  res.sendStatus(204)
})

export default router
