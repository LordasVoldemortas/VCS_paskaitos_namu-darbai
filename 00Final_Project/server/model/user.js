import { Schema, model } from "mongoose"

const user = model('User', new Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
    },
    last_name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 100,
        unique: true,
        required: true
        
    },
    // .limit(141),
    password: {
        type: String,
        minLength: 6,
        maxLength: 100,
        required: true,
    },
    party_name: {
        type: String,
        minLength: 3,
        maxLength: 100,
        required: true,
    },
    chairman: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: new Date(),
    }
    
}))

export default user