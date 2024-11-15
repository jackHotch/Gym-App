import express, { Request, Response } from 'express'
const router = express.Router()

import {
  createEntry,
  getAllWeight,
  getWeight,
  deleteEntry,
  getCurrentWeight,
} from '../database/Weight'

router.get('/', async (req: Request, res: Response) => {
  const rows = await getAllWeight()
  res.json(rows)
})

router.post('/', async (req: Request, res: Response) => {
  const weight = req.body.weight
  const date = req.body.date
  await createEntry(weight, date)
  res.sendStatus(201).send('New Weight Entry Created')
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
  res.sendStatus(204).send('Entry Deleted')
})

export default router
