import request from 'request';

const url = 'http://api.weatherstack.com/current?access_key=f8626bd7c4b5b714577a053ee790f719&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        let res = response.body.current;
        console.log(`${res.weather_descriptions[0]}. It is currently ${res.temperature} degress out. It feels like ${res.feelslike} degress out`);
    }
});

//Geocoding Los%20Angeles
const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW50b25tYWthcmtpbiIsImEiOiJja20yMWNzNWIyOXRqMm5wbHh2ajgwdG1vIn0.DnpfvcJGfLZyNLTFY96k_Q&limit=1';

request({ url: mapUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!')
    } else if (response.body.features.length === 0) {
        console.log(`Unable to find location. Try another search`);
    } else {
        const latitude = response.body.features[0].center[1];
        const longtitude = response.body.features[0].center[0];
        console.log(latitude, longtitude);
    }
})