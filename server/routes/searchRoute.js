import express from 'express'
import { searchBloodGroup } from '../controllers/searchController.js'

const searchRouter = express.Router()

searchRouter.get('/donors',searchBloodGroup)

export default searchRouter