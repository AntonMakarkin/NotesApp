import geocode from './utils/geocode.js';
import forecast from './utils/forecast.js';

geocode('Saint Petersburg', (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
})

forecast(59.95, 30.31667, (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
})