import { Schema, model } from "mongoose";
import status from '../model/status.js';

const post = model('Post', new Schema({
    project_name: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 2000,
        required: true
    },
    photo: {
        type: String,
        maxLength: 1000,
        required: true,
    },
    // default_status: {
    //     type: String,
    //     default: "Pateiktas"
    // },
    status_name: {
        type:Schema.Types.ObjectId,
        ref: 'Status',
        default: '6602c97287f136d4e55a010e'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    resolution_date: {
        type: Date,
        unique: true

    },
    created_at: {
        type: Date,
        default: new Date(),
    }
}))

export default post