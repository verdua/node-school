'use strict'

const http = require('http');
const bl = require('bl');

let url = process.argv[2];
let bufferString = '';

http.get(url, resp => {
    resp.pipe(bl((error, data) => {
        if (error) return console.error(error);

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
})