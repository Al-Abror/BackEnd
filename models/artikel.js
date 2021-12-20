const mongoose = require("mongoose")

const artikelSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    }
});


const artikelModel = mongoose.model("Artikel", artikelSchema)
module.exports = artikelModel