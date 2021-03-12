const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=f8626bd7c4b5b714577a053ee790f719&query=45,-75`;

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('Error: ', error)
})

request.end()