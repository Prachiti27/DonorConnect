import express from 'express'
import { deleteProfile, getProfile, getUser, loginUser, logoutUser, registerUser, updateProfile } from '../controllers/userController.js'
import requireAuth from '../middlewares/authMiddleware.js'

const userRouter = express.Router()

userRouter.post('/sign-up',registerUser)
userRouter.post('/sign-in',loginUser)
userRouter.post('/log-out',logoutUser)
userRouter.get('/me',requireAuth,getUser)
userRouter.get('/profile',requireAuth,getProfile)
userRouter.put('/update-profile',requireAuth,updateProfile)
userRouter.delete('/delete-profile',requireAuth,deleteProfile)

export default userRouter