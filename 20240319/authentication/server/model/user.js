import { Schema, model } from "mongoose";

const user = model('User', new Schema({
    user_name: { 
        type: String,
        // nurodome, jog vartotojo vardas tures but nesikartojantis visoje kolekcijoje
        unique: true,
        // min 3 simboliu ilgio vardas 
        minLength: 3,
        // max 50 simboliu ilgio vardas
        maxLength: 50,
        // nurodymas, kad reiksme bus reikalaujama
        required: true
    },
    photo: {
        type: String,
        maxLength: 80,
    },
    bio: {
        type: String,
        maxLength: 180,
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 50,
        unique: true,
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 100,
        required: true,
    },
    created_at: {
        type: Date,
        // reiksmes pagal nutylejima priskyrimas, jei si nera siunciama
        default: new Date(),
    }
}))

export default user;