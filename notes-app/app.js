const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('amakarkin27.com'));
console.log(validator.isURL('https:/meas.io'));



/*const add = require('./utils');
const sum = add(4, -2);
console.log(sum);*/