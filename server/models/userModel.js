import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ['donor','recipient'],
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel