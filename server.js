const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// seed data
const garageSeed = require('./models/garageCollection.js');
// model file
const Garage = require('./models/garageSchema.js');

app.get('/garage', (req, res) => {
    Garage.find({}, (err, allCars) => {
        console.log(allCars)
        res.render('index.ejs', {
            cars: allCars
        })
    })
})


app.listen(3000, () => {
    console.log('listening');
})

// garage is sub db which will have a collection
mongoose.connect('mongodb://localhost:27017/garage', () => {
    console.log('The connection with mongo is established')
})

// Garage.create(garageSeed, (err, data) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log('added garage data')
//     }
// })