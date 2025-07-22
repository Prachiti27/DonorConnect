import donorModel from "../models/donorModel.js"

const searchBloodGroup = async (req, res) => {
    const { bloodGroup } = req.query

    if (!bloodGroup) {
        return res.json({ success: false, message: 'Blood  Group required' })
    }

    try {
        const donors = await donorModel.find({
            bloodGroup,
            isAvailable: true
        })
        .populate('userId','name email')
        .select('bloodGroup gender location coordinates contact')

        const formattedDonors = donors.map(donor => ({
            _id: donor._id,
            bloodGroup: donor.bloodGroup,
            gender: donor.gender,
            location: donor.location,
            coordinates: donor.coordinates,
            contact: donor.contact,
            name: donor.userId?.name || 'No name',
            email: donor.userId?.email || ''
        }))

        res.json(formattedDonors)
    } catch (error) {
        res.json({success:false,message:"Server"})
    }
}

export { searchBloodGroup }