const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing note!');
}


//const msg = getNotes();
//console.log(msg);

//console.log(validator.isEmail('amakarkin27.com'));
//console.log(validator.isURL('https:/meas.io'));
//console.log(chalk.green.bold("Success!"));

//console.log(process.argv[2]);