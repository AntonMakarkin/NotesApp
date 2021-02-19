const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('amakarkin27.com'));
console.log(validator.isURL('https:/meas.io'));
console.log(chalk.green.bold("Success!"));



/*const add = require('./utils');
const sum = add(4, -2);
console.log(sum);*/