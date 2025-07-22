import express from 'express'
import { registerDonor, registerRecipient } from '../controllers/registrationController.js'
import requireAuth from '../middlewares/authMiddleware.js'

const registerRouter = express.Router()

registerRouter.post('/donor',requireAuth,registerDonor)
registerRouter.post('/recipient',requireAuth,registerRecipient)

export default registerRouter