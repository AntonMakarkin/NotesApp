import express from 'express'
import DBconnect from './db/mongoose.js'
import userRouter from './routers/users.js'
import taskRouter from './routers/tasks.js'
import bcrypt from 'bcryptjs'

DBconnect()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword) 
    console.log(isMatch)
}

myFunction()