import donorModel from "../models/donorModel.js"
import validator from "validator"

const registerDonor = async (req, res) => {
    try {
        const { gender, bloodGroup, location, lastDonationDate, availability, contact } = req.body
        const userId = req.user.id

        const existingDonor = await donorModel.findOne({ userId })

        if(existingDonor){
            return res.json({success:false,message:'User already registered as donor.'})
        }

        if(!validator.isMobilePhone(contact,'en-IN')){
            return res.json({success:false,message:'Invalid Contact Number'})
        }

        const newDonor = new donorModel({
            userId : userId,
            bloodGroup,
            location,
            lastDonationDate,
            availability,
            contact,
            gender
        })

        await newDonor.save()
        return res.json({success:true,message:"Donor registred successfully."})

    } catch (error) {
        console.log(error)
        return res.json({success:false,message:'Server error'})
    }
}

export {registerDonor}