import express from 'express'
import DBconnect from './db/mongoose.js'
import userRouter from './routers/users.js'
import taskRouter from './routers/tasks.js'
import multer from 'multer'

DBconnect()

const app = express()
const port = process.env.PORT 


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

