const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, timestamps);


const loginModel = mongoose.model("Login", loginSchema)
module.exports = loginModel