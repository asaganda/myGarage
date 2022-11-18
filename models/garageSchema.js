const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
    img: { 
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    make: {
       type: String,
       required: true
    },
    model: {
        type: String,
        required: true
    },
    mileage: Number,
    value: Number,
    specs: [String]
})

const garageCollection = mongoose.model('Garage', garageSchema)
module.exports = garageCollection