import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

const requireAuth = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if(!token){
            return res.json({success:false,message:"No token provided"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id).select("-password")

        if(!user) return res.json({success:false,message:"Invalid User"})
        
        req.user = user
        next()
    } catch (error) {
        return res.json({success:false,message:"Unauthorised"})
    }
}

export default requireAuth