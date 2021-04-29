const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app) //it doesnt change behavior (creating server outside of express)
const io = socketio(server)
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve (load at first)
app.use(express.static(publicDirectoryPath))

const message = 'Welcome'

io.on('connection', (socket) => {
    console.log('New websocket connection')

    socket.emit('message', message)

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

