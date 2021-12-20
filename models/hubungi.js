const mongoose = require("mongoose")

const hubungiSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    keluhan: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    nama_kantor: {
        type: String
    },
    email_kantor: {
        type: String
    },
    no_hp: {
        type: Number
    },
    alamat: {
        type: String
    },
    nama_web: {
        type: String
    }
})

const HubungiModel = mongoose.model('Hubungi', hubungiSchema)
module.exports = HubungiModel