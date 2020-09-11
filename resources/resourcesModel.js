const db = require('../data/connection')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources')
        .where({ id: id })
        .first()
}

function add(resource) {
    return db('resources')
        .insert(resource, 'id')
}