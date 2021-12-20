const mongoose = require("mongoose")

const kategoriSchema = new mongoose.Schema({
    judul: {
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

const KategoriModel = mongoose.model('Kategori', kategoriSchema)
module.exports = KategoriModel