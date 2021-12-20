const mongoose = require("mongoose")

const katagoriSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    nama_problem: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    gambar: {
        type: String
    }
})

const KatagoriModel = mongoose.model('Katagori', katagoriSchema)
module.exports = KatagoriModel