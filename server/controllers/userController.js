import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const exists = await userModel.findOne({ email })

        if (exists) {
            return res.json({ success: false, message: "User already exists." })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password." })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()

        const token = createToken(user._id)

        res.cookie('token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000 
        })

        res.json({ success: true, message: "User registered successfully" })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist. Please register first." })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 1000 
            })

            res.json({ success: true, message: "Logged in successfully" })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const logoutUser = (req,res) => {
    res.clearCookie('token',{
        httpOnly: true,
        secure: false,
        sameSite:'lax'
    })
    res.json({success:true,message:"Logged out successfully."})
}

const getUser = (req,res) => {
    res.json({success:true,user:req.user})
}

export { registerUser, loginUser, logoutUser,getUser }
