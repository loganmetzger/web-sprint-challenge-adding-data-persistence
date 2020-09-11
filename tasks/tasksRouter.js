const express = require('express')
const router = express.Router()

const Tasks = require('./tasksModel')

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            res.status(200).json({ data: tasks })
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
})

router.get('/:id', (req, res) => {
    Tasks.findbyId()
        .then(task => {
            if(!task) { 
                res.status(404).json({ message: "file does not exist" })
            } else {
                res.status(200).json({ data: task })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
})

router.post('/', (req, res) => {
    const newTask = req.body
    Tasks.add(newTask)
        .then(task => {
            res.status(201).json({ data: task })
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
})

module.exports = router;