import express from 'express'
import requireAuth from '../middlewares/authMiddleware.js'
import { contactDonor } from '../controllers/emailController.js'

const emailRouter = express.Router()

emailRouter.post('/contact-donor',requireAuth,contactDonor)

export default emailRouter