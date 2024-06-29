require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//CREATING EXPRESS APP
const app = express()

//MIDDLEWARE
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//ROUTES
app.use('/api/workouts', workoutRoutes)


//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on port', process.env.PORT)
    })
 })
 .catch((error) => {
    console.log(error)
 }) 




