const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f8626bd7c4b5b714577a053ee790f719&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});