import mongoose from 'mongoose'
import { IUser } from '../config/inteface'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add your name"],
        trim: true,
        maxLength: [20, "Your name is up to 20 chars long."]
    },
    account: {
        type: String,
        required: [true, "please add your email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "please add your password"]
    },
    avatar: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        default: 'user' // admin
    },
    type: {
        type: String,
        default: 'register' // login
    },
}, {
    timestamps: true
})

export default mongoose.model<IUser>('User', userSchema)