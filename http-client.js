'use strict'

const http = require('http');

let url = process.argv[2];

http.get(url, (resp) => {
    resp.setEncoding('utf-8')
    resp.on('data', console.log);
    resp.on('error', console.log);
});