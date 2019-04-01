'use strict';

const fs = require('fs');

const filePath = process.argv[2];

fs.readFileSync = function (filePath, f) {
    return undefined;
}
// Read the file and store in in a Buffer
const file = fs.readFileSync(filePath, (err) => {
    if(err) { throw err; }
});
// console.log(file.toString('utf8'));
//
// Creating a random value (using Math.random() or maybe faker()
const randomValue = Math.random() * 100;
const valueFile = Buffer.from(`${file} ${randomValue}`);
console.log(valueFile.toString('utf8'));

// write to file
fs.writeFile(filePath, valueFile, (err) => {
    if (err) { throw err; }
    console.log('Save to file');
});