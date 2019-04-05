'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
    // fix this file
    if( !file || file.match(/bad/i) ) {
        cb('Invalid File');
    }
    else {
        cb(undefined, new Buffer('File Contents'));
    }
};