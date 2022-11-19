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


// GET/RENDER ROUTES
// list of collection of cars
app.get('/garage', (req, res) => {
    Garage.find({}, (err, allCars) => {
        console.log(allCars)
        res.render('index.ejs', {
            cars: allCars
        })
    })
})

// showing form for new car
app.get('/garage/new', (req, res) => {
    res.send('will be form to add new car');
})

// showing one car
app.get('/garage/:id', (req, res) => {
    Garage.findById(req.params.id, (err, foundCar) => {
        console.log(foundCar)
        res.render('show.ejs', {
            car: foundCar
        })
    })
})

// showing form to edit/update one car
app.get('/garage/:id/edit', (req, res) => {
    res.send('will be form to update/edit car info');
})

// ACTION/RENDER ROUTES
// new car form will hit this post req route when form submit clicked
app.post('/garage', (req, res) => {
    res.send('new car added');
})

// delete request given car id parameter
app.delete('/garage/:id', (req, res) => {
    res.send('car removed from db');
})

// put request will submit send updated car info to db
app.put('/garage/:id', (req, res) => {
    res.send('car updated in db');
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