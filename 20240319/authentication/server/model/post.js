import { Schema, model } from "mongoose";


// ORM - object oriented modeling
const postSchema = new Schema ({
    photo: {
    type: String,
    maxLength: 80,
    required: true,
},
description: {
    type: String,
    maxLength: 2200,
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
}, {
    toJSON: {
        virtuals: true
    }
});
postSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'post',
    count: true
})

export default model('Post', postSchema)

