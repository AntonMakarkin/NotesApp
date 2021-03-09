import request from 'request';

const url = 'http://api.weatherstack.com/current?access_key=f8626bd7c4b5b714577a053ee790f719&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current);
    let res = response.body.current;
    console.log(`${res.weather_descriptions[0]}. It is currently ${res.temperature} degress out. It feels like ${res.feelslike} degress out`);
});