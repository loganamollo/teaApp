// handles API calls to /users/ path
const express = require('express')
const router = express.Router()

const User = require('../models/user')


// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({mesage: err.message})
    }
})


// get one user
router.get('/:id', getUser, (req, res) => { // the ':id' indicates we are expecting a variable id to be sent in the url
    res.send(res.user)
})


// create one user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
    })

    // try creating a user on the db
    try {
        const newUser = await user.save()
        res.status(201).json(newUser) // 201 means object created successfully
    } catch (err) {
        res.status(400).json({message: err.message}) // 400 means client (frontend) sent wrong data
    }
})


// update one user
router.patch('/:id', getUser, async (req, res) => {
    if(req.body.name != null) {
        res.user.name = req.body.name
    }
    if(req.body.password != null) {
        res.user.password = req.body.password
    }
    if(req.body.role != null) {
        res.user.role = req.body.role
    }

    // try to update user on db
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({message: err.message}) // client sent bad data
    }
})


// delete one user
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({message: 'Deleted user'})
    } catch (err) {
        res.status(500).json({message: err.message}) // 500 means server error
    }
})


// custom middleware to get a user and supply it to the route handler
async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id) 
        if (user === null) {
            return res.status(404).json({message: 'Cannot find user'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.user = user
    next()
}

module.exports = router