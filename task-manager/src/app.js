const express = require('express');
const DBconnect = require('./db/mongoose.js')
const userRouter = require('./routers/users.js')
const taskRouter = require('./routers/tasks.js')

DBconnect()

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app



