const mongoose = require('mongoose')


// This defines the structure of every user document
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('user', userSchema)