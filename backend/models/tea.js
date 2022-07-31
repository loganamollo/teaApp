const mongoose = require('mongoose')

// this defines the structure of a tea package
const teaSchema = new mongoose.Schema({
    farmer: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    harvestDetails: {
        type: String,
        required: false,
    },
    report: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    buyer: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
})

module.exports = mongoose.model('tea', teaSchema)