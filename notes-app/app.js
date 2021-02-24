const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
    }
});

//Craete remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note');
    }
});

//Create read command-
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note');
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes');
    }
});

console.log(yargs.argv);


/*const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing note!');
}*/


//const msg = getNotes();
//console.log(msg);

//console.log(validator.isEmail('amakarkin27.com'));
//console.log(validator.isURL('https:/meas.io'));
//console.log(chalk.green.bold("Success!"));

//console.log(process.argv[2]);