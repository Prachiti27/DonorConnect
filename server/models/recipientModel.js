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
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male','Female','Other'],
        required: true
    },
    urgencyLevel: {
        type: String,
        enum: ['Normal','Urgent','Critical'],
        required: true
    }
})

const recipientModel = mongoose.model('recipient',recipientSchema)

export default recipientModel