'use strict';

const events = require('../events/event.js');
require('../events/logger.js');

describe('Logger module', () => {
  it('Should only take a file name', () => {
    function emit() {
      events.emit('log', 123);
    }
    
    expect(emit).toThrowError(new Error('Not a valid string'));
  });

  it('Should console log a message', () => {
    let spy = jest.spyOn(console, 'log');

    events.emit('log', 'fileName');

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});