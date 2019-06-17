'use strict';

const events = require('./event.js');

function log(file) {
  if (typeof file !== 'string') { throw new Error('Not a valid string'); }
  console.log(`${file} saved`);
}

events.on('log', log);
