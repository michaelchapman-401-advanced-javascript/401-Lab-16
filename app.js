'use strict';

const fs = require('fs');

const alterFile = (file) => {
  readFile(file)
    .then(text => {
      console.log(text);
      writeFile(text);
    });
};

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile( file, (err, data) => {
      if(err) { reject(err); }
      resolve(data.toString().toUpperCase());
    });
  });
}

function writeFile(text) {
  return new Promise((resolve, reject) => {
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { reject(err); }
      console.log(`${file} saved`);
    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);
