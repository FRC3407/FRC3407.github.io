import mongoose from "mongoose"

interface IUser {
    name: string
    email: string
    permLevel: "visitor" | "sponsor" | ""
    
}

const requiredString = {
    type: String,
    required: true
}

const UserSchema = new mongoose.Schema({
    name: requiredString,
    email: requiredString,
    permLevel: requiredString,
    primaryTeam: requiredString,
    teams: Array,
    isJohnLofton: {
        type: Boolean,
        default: false
    }
})
