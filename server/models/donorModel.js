import mongoose from 'mongoose'

const donorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    lastDonationDate: {
        type: Date
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    contact: {
        type: String,
        required: true
    },
    coordinates: {
        lat: Number,
        lng: Number
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    }
})

const donorModel = mongoose.model('donor', donorSchema)

export default donorModel