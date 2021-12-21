const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const hubungiSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    keluhan: {
        type: String,
        required: true
    }
}, timestamps)

const HubungiModel = mongoose.model('Hubungi', hubungiSchema)
module.exports = HubungiModel