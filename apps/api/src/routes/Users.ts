import express, { Request, Response } from 'express'
import bcrypt from 'bcrypt'
const router = express.Router()

import { findUser, signUp } from '../database/Users'

router.post('/signup', async (req: Request, res: Response) => {
  try {
    const user = req.body
    if (!user.email || !user.password)
      res.status(400).json({ message: 'No email or password' })

    const existingUser = await findUser(user.email)
    if (existingUser.length !== 0)
      return res.status(400).json({ message: 'Email already exists' })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await signUp(user)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message })
  }
})

router.get('/user', async (req, res) => {
  const rows = await findUser('jhotchkiss')
  res.json(rows)
})

export default router
