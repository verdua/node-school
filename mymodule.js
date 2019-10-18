'use strict'

const fs = require('fs');
const path = require('path');

module.exports = function(dirname, ext, callback) {
    fs.readdir(dirname, (error, fileList) => {
        if (error) return callback(error);

        fileList = fileList.filter(file => path.extname(file) === '.' + ext)
        callback(null, fileList);
    });
}