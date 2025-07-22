import donorModel from "../models/donorModel.js"
import validator from "validator"
import getCoordinatesFromAddress from "../utils/geocode.js"
import recipientModel from "../models/recipientModel.js"

const registerDonor = async (req, res) => {
    try {
        const { gender, bloodGroup, location, lastDonationDate, availability, contact } = req.body
        const userId = req.user.id

        const coordinates = await getCoordinatesFromAddress(location)

        if (!bloodGroup
        || !location
        || !contact
        || !gender
        || !lastDonationDate
        || !availability
    ) return res.json({ success: false, message: 'All fields are required.' })

        const existingDonor = await donorModel.findOne({ userId })

        if (existingDonor) {
            return res.json({ success: false, message: 'User already registered as donor.' })
        }

        if (!validator.isMobilePhone(contact, 'en-IN')) {
            return res.json({ success: false, message: 'Invalid Contact Number' })
        }

        const newDonor = new donorModel({
            userId: userId,
            bloodGroup,
            location,
            coordinates,
            lastDonationDate,
            availability,
            contact,
            gender
        })

        await newDonor.save()
        return res.json({ success: true, message: "Donor registred successfully." })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: 'Server error' })
    }
}

const registerRecipient = async (req, res) => {
    const { bloodGroup, location, contact, gender, urgencyLevel } = req.body
    const userId = req.user.id

    if (!bloodGroup
        || !location
        || !contact
        || !gender
        || !urgencyLevel
    ) return res.json({ success: false, message: 'All fields are required.' })

    const existingRecipient = await recipientModel.findOne({ userId })

    if (existingRecipient) {
        return res.json({ success: false, message: 'User already registered as recipient.' })
    }

    if (!validator.isMobilePhone(contact, 'en-IN')) {
        return res.json({ success: false, message: 'Invalid Contact Number' })
    }
    try {
        const newRecipient = new recipientModel({
            userId,
            bloodGroup,
            location,
            contact,
            gender,
            urgencyLevel
        })

        await newRecipient.save()

        res.json({ success: true, message: 'Recipient registered successfully' })
    }
    catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export { registerDonor,registerRecipient }