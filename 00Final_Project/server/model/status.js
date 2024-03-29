import { Schema, model } from "mongoose"

const status = model('Status', new Schema({
    name: {
        type: String
    }
}))

export default status