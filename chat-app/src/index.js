const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app) //it doesnt change behavior (creating server outside of express)
const io = socketio(server)
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve (load at first)
app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New websocket connection')

    socket.emit('message', 'Welcome')
    socket.broadcast.emit('message', 'A new user has joined')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) { //if bad words are checked
            return callback('Profanity is not allowed')
        }

        io.emit('message', message)
        callback('Delivered')
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
