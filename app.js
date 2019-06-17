'use strict';

const fs = require('fs');
const events = require('./events/event.js');

require('./events/logger.js');

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, caps(data));
    });
};

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile( file, (err, data) => {
      if(err) { reject(err); }
      resolve(data.toString());
    });
  });
}

let caps = (data) => {
  return data.toUpperCase();
};

function writeFile(file, text) {
  return new Promise((resolve) => {
    fs.writeFile( file, Buffer.from(text), (err) => {
      if(err) { events.emit('error', err); }
      resolve(events.emit('log', file));
    });
  });
}

function handleError(err) {
  throw err;
}

events.on('error', handleError);

let file = process.argv.slice(2).shift();
alterFile(file);
