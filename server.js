const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/garage', (req, res) => {
    res.send('my Garage!!')
})


app.listen(3000, () => {
    console.log('listening');
})

// garage is sub db which will have a collection
mongoose.connect('mongodb://localhost:27017/garage', () => {
    console.log('The connection with mongo is established')
})