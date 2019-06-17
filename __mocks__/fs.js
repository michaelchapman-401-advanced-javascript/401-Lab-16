'use strict';

module.exports = exports = {};

exports.readFile = (file) => {
  let data = 123;
  if(file.match(/bad/i)){
    return 'Invalid file';
  }else{
    return data.toString();
  }
};

exports.writeFile = (file, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb('fileName', Buffer.from('File Contents'));
  }
};
