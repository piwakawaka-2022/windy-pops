//set up a database function to get a statement
//set up a post route to post the statement
//set up form route (get)
//create page with form for compliment
//once form has been filled out and submit has been clicked, preview of compliment and link back to home

const express = require('express')
const db = require('./db')
const router = express.Router()

// index route .get request
router.get('/', async (req, res) => {
  try {
    // db.getSpicy()
    db.getRandom()
    res.send('hello!')
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// index route .post request

module.exports = router
