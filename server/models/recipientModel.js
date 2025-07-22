import mongoose, { mongo } from 'mongoose'

const recipientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    bloodGroup: {
        type: 'String',
        enum: ['A+','A-','B+','B-','O+','O-','AB+','AB-'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male','female','other'],
        required: true
    },
    urgencyLevel: {
        type: String,
        enum: ['normal','urgent','critical'],
        required: true
    }
})

const recipientModel = mongoose.model('recipient',recipientSchema)

export default recipientModel