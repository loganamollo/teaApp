// this file serves as the API server that runs on the Node runtime


// load environment variables stored in the .env file
// environment variables are used to keep secret info outside code
require('dotenv').config()

const { json } = require('express')
// imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


// initialize app
const app = express()


// setup app to accept requests from another IP address or route
// for example, the address of our react app
app.use(cors())


// setup db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // database url is an environment variable
const db = mongoose.connection
db.on( 'error', (error) => console.log(error) )
db.once('open', () => console.log('Database connection established') ) // runs once when the db connection starts


// middleware that acts on the request before it reaches the API route handlers
//setup server to use json
app.use(express.json())


// routes to handle API calls
//handles calls to /users/ endpoint (url)
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

//handles calls to /teas/ endpoint
const teasRouter = require('./routes/teas')
app.use('/teas', teasRouter)

// start server
app.listen(
    process.env.PORT, // port number is defined as an environment variable
    () => { console.log(`API server started at http://localhost:${ process.env.PORT }`) }
)