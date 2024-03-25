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
        unique: true,
        minLength: 3,
        maxLength: 50,
        required: true,
    },
    
    party_name: {
        type: String,
        min: 3,
        max: 10
    }
}))