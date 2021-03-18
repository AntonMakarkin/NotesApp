import express from 'express'
import path from 'path'
import hbs from 'hbs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location (adding settings)
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve (load at first)
app.use(express.static(publicDirectoryPath)) 

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
        helpMessage: 'Do you need help? Check this page and find an answer',
        title: 'Help',
        name: 'Anton Makarkin'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Moscow'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anton Makarkin',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anton Makarkin',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});