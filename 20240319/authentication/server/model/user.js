import { Schema, model } from "mongoose";

const user = model('User', new Schema({
    user_name: { 
        type: String,
        // nurodome, jog vartotojo vardas tures but nesikartojantis visoje kolekcijoje
        unique: true,
        // min 3 simboliu ilgio vardas 
        min: 3,
        // max 50 simboliu ilgio vardas
        max: 50,
        // nurodymas, kad reiksme bus reikalaujama
        required: true
    },
    photo: {
        type: String,
        max: 80,
    },
    bio: {
        type: String,
        max: 180,
    },
    email: {
        type: String,
        min: 5,
        max: 100,
        unique: true,
    },
    password: {
        type: String,
        min: 6,
        max: 100,
        required: true,
    },
    created_at: {
        type: Date,
        // reiksmes pagal nutylejima priskyrimas, jei si nera siunciama
        default: new Date(),
    }
}))

export default user;