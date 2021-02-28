const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Anton";
data.age = 20;

const convertData = JSON.stringify(data);
fs.writeFileSync('1-json.json', convertData);

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);*/

/*const dataBuffer = fs.readFileSync('1-json.json'); //binary
const dataJSON = dataBuffer.toString(); //convert to string (JSON)
const data = JSON.parse(dataJSON); //convert to object
console.log(data.title);*/


/*const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);*/