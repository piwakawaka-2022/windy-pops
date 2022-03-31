const express = require('express')

const routes = require('./routes')

const server = express()

// Middleware
server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/', routes)

module.exports = server
