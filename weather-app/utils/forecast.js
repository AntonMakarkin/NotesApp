import request from 'request';

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f8626bd7c4b5b714577a053ee790f719&query=${latitude},${longitude}`;

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            let res = response.body.current
            callback(undefined, `${res.weather_descriptions[0]}. It is currently ${res.temperature} degress out. It feels like ${res.feelslike} degress out`)
        }
    })
}

export default forecast