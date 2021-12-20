const mongoose = require("mongoose")

function connect() {
    const uri = "mongodb://localhost:27017/cureit"
    return mongoose
        .connect(uri)
}

module.exports = {connect: connect}