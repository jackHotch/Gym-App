import express, { Request, Response } from 'express'
const router = express.Router()

import { getCurrentSplit, getAllSplits } from '../database/Splits'

router.get('/', async (req: Request, res: Response) => {
  const rows = await getAllSplits()
  res.status(200).json(rows)
})

router.get('/current', async (req: Request, res: Response) => {
  const rows = await getCurrentSplit()
  res.json(rows[0])
})

export default router
