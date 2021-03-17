const path = require('path');
const express = require('express')
/*import express from 'express'
import path from 'path'*/

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const pathToAboutPage = path.join(__dirname, '../public/about.html')
const pathToHelpPage = path.join(__dirname, '../public/help.html')

app.use(express.static(publicDirectoryPath)) //load at first
app.use(express.static(pathToAboutPage))
app.use(express.static(pathToHelpPage))

/*app.get('/help', (req, res) => {
    res.send({
        name: 'Anton',
        age: 20
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})*/

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Moscow'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});