import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'
import registerRouter from './routes/registerRoute.js'
import searchRouter from './routes/searchRoute.js'
import emailRouter from './routes/emailRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()
const port = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
}))

app.use(cookieParser())

app.use('/api/user', userRouter)
app.use('/api/register', registerRouter)
app.use('/api/search', searchRouter)
app.use('/api/email', emailRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server running in port : ${port}`)
})

export default app