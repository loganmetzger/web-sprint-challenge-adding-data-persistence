const express = require('express')

const server = express()


const db = require('../connection')



server.use(express.json())

module.exports = server;