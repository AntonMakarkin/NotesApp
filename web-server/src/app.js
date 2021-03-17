import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath)) //load at first

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Moscow'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});