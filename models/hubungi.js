const mongoose = require("mongoose")

const hubungiSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    keluhan: {
        type: String,
        required: true
    }
})

const HubungiModel = mongoose.model('Hubungi', hubungiSchema)
module.exports = HubungiModel