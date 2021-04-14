import express from 'express'
import DBconnect from './db/mongoose.js'
import userRouter from './routers/users.js'
import taskRouter from './routers/tasks.js'
import jwt from 'jsonwebtoken'

DBconnect()

const app = express()
const port = process.env.PORT || 3000

/*app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('GET requests are disabled')
    } else {
        next() //middleware function is finished
    }
})*/

/*app.use((req, res, next) => {
    res.status(503).send('Maintenance works on server. Please, come back later')
    next()
})*/

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})


/*const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    return {}
}

console.log(JSON.stringify(pet))*/