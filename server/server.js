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
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(cookieParser())

app.use('/user', userRouter)
app.use('/register', registerRouter)
app.use('/search', searchRouter)
app.use('/email', emailRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server running in port : ${port}`)
})