const express = require('express')
const server = express()

server.use(express.json())

const projectsRouter = require()
const tasksRouter = require()
const resourcesRouter = require()

server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourcesRouter)

server.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

module.exports = server;