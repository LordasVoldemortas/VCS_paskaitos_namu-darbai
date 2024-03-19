import { Schema, model } from "mongoose";

// ORM - object oriented modeling
const post = model('Post', new Schema({
    photo: {
        type: String,
        max: 80,
        required: true,
    },
    description: {
        type: String,
        max: 600,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        // reiksmes pagal nutylejima priskyrimas, jei si nera siunciama
        default: new Date(),
    }
}))

export default post;