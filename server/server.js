import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(cors())

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server running in port : ${port}`)
})