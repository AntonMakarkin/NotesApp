import express from 'express'
import DBconnect from './db/mongoose.js'
import User from './models/user.js'

DBconnect()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
    //res.send('Pidor')
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})