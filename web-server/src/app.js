import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs') //adding settings
app.use(express.static(publicDirectoryPath)) //load at first

app.get('/', (req, res) => { 
    res.render('index', { //get view and converts it inti html
        title: 'Weather',
        name: 'Anton Makarkin'
    }) 
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anton Makarkin'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpMessage: 'Do you need help? Check this page and find an answer'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Moscow'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});