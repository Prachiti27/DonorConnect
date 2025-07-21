import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/sign-up',registerUser)
userRouter.post('/sign-in',loginUser)

export default userRouter