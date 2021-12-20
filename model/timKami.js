const mongoose = require("mongoose")

const timkamiSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    posisi: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    }
});


const timkamiModel = mongoose.model("timkami", timkamiSchema)
module.exports = timkamiModel