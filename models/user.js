const mongoose = require("mongoose")
const { emailValidator, passwordValidator, phoneValidator } = require('./validators')

const msg = 'Password must contain at least 8 characters and a combination of uppercase, lowercase and numbers'

const timestamps = {
    timestamps : true
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate : [emailValidator, 'email is not valid'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email is not valid']
    },
    no_hp: {
        type: Number,
        required : [true, 'phone number is required'],
        unique : true,
        validate : phoneValidator,
        match : /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        validate : [passwordValidator, msg],
        match : [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, msg]
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        lowercase : true,
        required: [true, 'gender is required']
    },
    role : {
        type: String,
        lowercase : true,
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