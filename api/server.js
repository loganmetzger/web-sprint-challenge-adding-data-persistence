const express = require('express')
const server = express()

server.use(express.json())

const projectsRouter = require('../projects/projectsRouter')
const tasksRouter = require('../tasks/tasksRouter')
const resourcesRouter = require('../resources/resourcesRouter')

server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourcesRouter)

server.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

module.exports = server;