import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"
import recipientModel from "../models/recipientModel.js"
import donorModel from "../models/donorModel.js"

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
        secure: true,
        sameSite:'none'
    })
    res.json({success:true,message:"Logged out successfully."})
}

const getUser = (req,res) => {
    res.json({success:true,user:req.user})
}

const getProfile = async(req,res) => {
    try {
        const userId = req.user.id

        const user = await userModel.findById(userId).select("name email")

        if(!user){
            return res.json({success:false,message:"User not found"})
        }

        const donor = await donorModel.findOne({userId}).select("bloodGroup location contact")
        const recipient = await recipientModel.findOne({userId}).select("bloodGroup location contact")

        const profile = donor || recipient

        res.json({
            name: user.name,
            email: user.email,
            bloodGroup: profile?.bloodGroup || "",
            location: profile?.location || "",
            contact: profile?.contact || ""
        })
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Internal server error"})
    }
}

const updateProfile = async(req,res) => {
    try {
        const userId = req.user.id
        const {name,email,bloodGroup,location,contact} = req.body

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            {name,email},
            {new:true}   
        )

        const donorProfile = await donorModel.findOne({userId})

        if(donorProfile){
            await donorModel.findOneAndUpdate(
                {userId},
                {bloodGroup,location,contact},
                {new:true}   
            )
        }
        else{
            await recipientModel.findOneAndUpdate(
                {userId},
                {bloodGroup,location,contact},
                {new:true}
            )
        }

        res.json({success:true,message:"User updated successfully",user:updatedUser})
    } catch (error) {
        res.json({success:false,message:"Internal server error"})
    }
}

const deleteProfile = async (req,res) => {
    try{
        const userId = req.user.id

        await userModel.findByIdAndDelete(userId)

        await donorModel.findOneAndDelete({userId})

        await recipientModel.findOneAndDelete({userId})

        res.json({success:true,message:"Profile deleted successfully!!"})
    }
    catch(error){
        res.json({success:false,message:"Server error"})
    }
}

export { registerUser, loginUser, logoutUser,getUser, getProfile,updateProfile, deleteProfile }
