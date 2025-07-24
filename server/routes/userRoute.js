import express from 'express'
import { getUser, loginUser, logoutUser, registerUser } from '../controllers/userController.js'
import requireAuth from '../middlewares/authMiddleware.js'

const userRouter = express.Router()

userRouter.post('/sign-up',registerUser)
userRouter.post('/sign-in',loginUser)
userRouter.post('/log-out',logoutUser)
userRouter.get('/me',requireAuth,getUser)

export default userRouter