// handles API calls to /users/ path
const express = require('express')
const router = express.Router()

const Tea = require('../models/tea')


// teas is short for a tea package
// get all teas
router.get('/', async (req, res) => {
    try {
        const teas = await Tea.find()
        res.json(teas)
    } catch (err) {
        res.status(500).json({mesage: err.message})
    }
})


// get one tea
router.get('/:id', getTea, (req, res) => { // the ':id' indicates we are expecting a variable id to be sent in the url
    res.send(res.tea)
})


// create one tea
router.post('/', async (req, res) => {
    const tea = new Tea({
        farmer: req.body.farmer,
        quantity: req.body.quantity,
    })

    // try creating a tea on the db
    try {
        const newTea = await tea.save()
        res.status(201).json(newTea) // 201 means object created successfully
    } catch (err) {
        res.status(400).json({message: err.message}) // 400 means client (frontend) sent wrong data
    }
})


// update one tea
router.patch('/:id', getTea, async (req, res) => {
    if (req.body.farmer || req.body.quantity) {
        res.status(400).json({message: 'Farmer and Quantity are immutable'}) // client sent bad data
    } else {
        if(req.body.harvestDetails != null) {
            res.tea.harvestDetails = req.body.harvestDetails
        }
        if(req.body.price != null) {
            res.tea.price = req.body.price
        }
        if(req.body.report != null) {
            res.tea.report = req.body.report
        }
        if(req.body.buyer != null) {
            res.tea.buyer = req.body.buyer
        }
    
        // try to update tea on db
        try {
            const updatedTea = await res.tea.save()
            res.json(updatedTea)
        } catch (err) {
            res.status(400).json({message: err.message}) // client sent bad data
        }
    }
})
    
    
// delete one tea
router.delete('/:id', getTea, async (req, res) => {
    try {
        await res.tea.remove()
        res.json({message: 'Deleted tea'})
    } catch (err) {
        res.status(500).json({message: err.message}) // 500 means server error
    }
})
    
    
// custom middleware to get a user and supply it to the route handler
async function getTea(req, res, next) {
    let tea
    try {
        tea = await Tea.findById(req.params.id)
        if (tea === null) {
            return res.status(404).json({message: 'Cannot find tea'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.tea = tea
    next()
}



module.exports = router