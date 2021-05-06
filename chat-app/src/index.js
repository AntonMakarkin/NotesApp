const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')
const { generateLocationMessage } = require('./utils/generateLocationMessage')

const app = express()
const server = http.createServer(app) //it doesnt change behavior (creating server outside of express)
const io = socketio(server)
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve (load at first)
app.use(express.static(publicDirectoryPath))

//socket.emit = to one client; io.emit = to everyone; socket.broadcast.emit = to everyone except one
//io.to.emit = to everyone in room; socket.broadcast.to.emit
io.on('connection', (socket) => {
    console.log('New websocket connection')

    socket.on('join', ({ username, room }) => {
        socket.join(room)

        socket.emit('message', generateMessage('Welcome'))
        socket.broadcast.to(room).emit('message', generateMessage(`${username} has joined!`))
    })

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) { //if bad words are checked
            return callback('Profanity is not allowed')
        }

        io.to('Moscow').emit('message', generateMessage(message))
        callback('Delivered')
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', generateLocationMessage(coords))
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left'))
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

