import express, { Request, Response } from 'express'
import bcrypt from 'bcrypt'
const router = express.Router()

import { findUserById, findUserByEmail, createUser, deleteUser } from '../database/Users'

router.post('/signup', async (req: Request, res: Response) => {
  const user = req.body
  if (!user.email || !user.password)
    return res.status(400).json({ message: 'No Email or Password' })

  try {
    const existingUser = await findUserByEmail(user.email)
    if (existingUser) return res.status(400).json({ message: 'Email already exists' })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await createUser(user)
    return res.sendStatus(201)
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', error: err.message })
  }
})

router.get('/login', async (req: Request, res: Response) => {
  const user = req.body
  if (!user.email || !user.password)
    return res.status(400).json({ message: 'No Email or Password' })

  try {
    const existingUser = await findUserByEmail(user.email)
    console.log('find user returns')
    if (!existingUser) return res.status(404).json({ message: 'Email not found' })
    console.log('user found')

    const validPassword = await bcrypt.compare(user.password, existingUser.password)
    console.log('password compared')
    console.log(validPassword)
    if (validPassword) return res.status(200).json({ id: existingUser.id })
    else return res.status(401).json({ message: 'Incorrect Password' })
  } catch (err) {
    console.log('error')
    return res.status(500).json({ message: 'Server Error', error: err.message })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const existingUser = await findUserById(userId)
  if (!existingUser) return res.status(404).json({ message: 'User not found' })

  await deleteUser(userId)
  return res.status(200).json({ message: 'User deleted' })
})

export default router
