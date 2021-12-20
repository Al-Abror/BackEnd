const mongoose = require("mongoose")

const testimoniSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    problema: {
        type: String,
        required: true,
    }
});


const testimoniModel = mongoose.model("Testimoni", testimoniSchema)
module.exports = testimoniModel