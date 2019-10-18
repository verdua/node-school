'use strict'

const myModule = require('./mymodule');

let dirname = process.argv[2];
let ext = process.argv[3];

myModule(dirname, ext, (error, fileList) => {
    if (error) return console.log(error);

    fileList.forEach(file => {
        console.log(file);
    });
})