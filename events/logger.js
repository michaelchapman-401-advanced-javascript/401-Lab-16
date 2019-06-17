'use strict';

const events = require('./event.js');

function log(file) {
  console.log(`${file} saved`);
}

events.on('log', log);
