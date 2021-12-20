const mongoose = require("mongoose")

const psikologSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    spesialis: {
        type: String
    },
    deskripsi: {
        type: String
    },
    testimoni: {
        type: String
    },
    gambar: {
        type: String
    }
})

const PsikologModel = mongoose.model('Psikolog', psikologSchema)
module.exports = PsikologModel