const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const userSchema = new mongoose.Schema({
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
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    no_hp: {
        type: Number,
        required : true
    },
    role : {
        type: String,
        required: true
    }
}, timestamps)

const UserModel = mongoose.model('User', userSchema)

// // untuk create admin nyalakan ini, matikan yg line 34
// const User = mongoose.model('User', userSchema)
// const UserModel = User.create({
//         name : 'admin',
//         email : 'admin@mail.com',
//         password : 'Admin123#',
//         gender : 'Male',
//         no_hp : 0987654321,
//         role : 'admin'
//     })
module.exports = UserModel