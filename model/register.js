const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    conf_password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    no_hp: {
        type: String,
        required: true,
    }
});


const registerModel = mongoose.model("Register", registerSchema)
module.exports = registerModel