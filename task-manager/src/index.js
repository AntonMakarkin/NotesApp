import express from 'express'
import DBconnect from './db/mongoose.js'
import userRouter from './routers/users.js'
import taskRouter from './routers/tasks.js'
import jwt from 'jsonwebtoken'
import Task from './models/task.js'
import User from './models/user.js'

DBconnect()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const main = async () => {
    /*const task = await Task.findById('60774708166ee35984206554')
    await task.populate('owner').execPopulate() //to connect with the user collection
    console.log(task.owner)*/

    const user = await User.findById('6077419f83bf0b2a30251339')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
