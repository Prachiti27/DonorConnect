import express from 'express'
import { registerDonor } from '../controllers/registrationController.js'
import requireAuth from '../middlewares/authMiddleware.js'

const registerRouter = express.Router()

registerRouter.post('/donor',requireAuth,registerDonor)

export default registerRouter