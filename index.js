const server = require('./api/server')

const port = process.env.PORT || 3344;

server.listen(port, () => {
    console.log('Running on ya port')
})