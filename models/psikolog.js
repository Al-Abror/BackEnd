const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
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
}, timestamps)

const PsikologModel = mongoose.model('Psikolog', psikologSchema)
module.exports = PsikologModel