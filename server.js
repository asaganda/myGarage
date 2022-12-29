const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
require('dotenv').config()

// PORT
// Allow use of Heroku's port or our own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// Database
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// seed data
const garageSeed = require('./models/garageCollection.js');
// model file
const Garage = require('./models/garageSchema.js');


// GET/RENDER ROUTES
// list of collection of cars
app.get('/garage', (req, res) => {
    Garage.find({}, (err, allCars) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('showing all cars - all good')
        }
        res.render('index.ejs', {
            cars: allCars
        })
    })
})

// showing form for new car
app.get('/garage/new', (req, res) => {
    res.render('new.ejs');
})

// showing one car when selected
app.get('/garage/:id', (req, res) => {
    Garage.findById(req.params.id, (err, foundCar) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('showing one car - all good')
        }
        res.render('show.ejs', {
            car: foundCar
        })
        
    })
})

// showing form to edit/update one car
app.get('/garage/:id/edit', (req, res) => {
    Garage.findById(req.params.id, (err, foundCar) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('found car to edit - all good')
        }
        res.render('edit.ejs', {
            car: foundCar
        })
    })
    
})


// ACTION/RENDER ROUTES
// new car form will hit this post req route when form submit clicked
app.post('/garage', (req, res) => {
    Garage.create(req.body, (err, createdCar) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('car created - all good')
        }
        res.redirect('/garage'); // will show car that got added
    })
})

// delete request given car id parameter
app.delete('/garage/:id', (req, res) => {
    Garage.findByIdAndDelete(req.params.id, (err, deletedCar) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('deleted car - all good')
        }
        res.redirect('/garage')
    })
})

// put request will submit send updated car info to db
app.put('/garage/:id', (req, res) => {
    Garage.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCar) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('updated the car - all good')
        }
        res.redirect(`/garage/${req.params.id}`);
    })
    
})


app.listen(PORT, () => console.log('listening on port:', PORT));

// garage is sub db which will have a collection
mongoose.connect(MONGODB_URI, () => {
    console.log('The connection with mongo is established')
})

// used this code below to seed data intially onto mongodb atlas
// Garage.create(garageSeed, (err, data) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log('added garage data')
//     }
// })

// const seedCarData = () => {
// }

// const checkDatabaseForCars = () => {
//     const carCount = Garage.countDocuments({}, (err, count) => {
//         console.log(count)
//         return count
//     })
//     console.log(carCount)
//     if (carCount === 0) {
//         seedCarData()
//         console.log('data should be seeded now')
//         carCount()
//     } else {
//         console.log('couldnt seed data')
//     }
// }

// checkDatabaseForCars()