import express, { Request, Response } from 'express'
const router = express.Router()

import { getCurrentSplit, getAllSplits } from '../database/Splits'

router.get('/', async (req: Request, res: Response) => {
  const rows = await getAllSplits()
  res.json(rows)
})

router.get('/current', async (req: Request, res: Response) => {
  const row = await getCurrentSplit()
  res.json(row)
})

export default router
