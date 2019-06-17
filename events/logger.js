'use strict';

const events = require('./event.js');

/**
 * @module log
 * @param {string} file - Name of the file to read from
 * @desc Handles console logging the save message
 */
function log(file) {
  if (typeof file !== 'string') { throw new Error('Not a valid string'); }
  console.log(`${file} saved`);
}

events.on('log', log);
