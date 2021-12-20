const mongoose = require("mongoose")

const webinarSchema = new mongoose.Schema({
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


const webinarModel = mongoose.model("Webinar", webinarSchema)
module.exports = webinarModel