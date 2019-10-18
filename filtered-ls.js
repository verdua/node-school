'use strict'

const fs = require('fs');
const path = require('path');

let folder = process.argv[2];
let ext = '.' + process.argv[3];

let printFileNames = (err, fileList) => {
    if (err) return console.log(err);
    
    fileList.forEach(file => {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
}

fs.readdir(folder, printFileNames);
