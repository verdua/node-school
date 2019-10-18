'use strict'

const http = require('http');
const map = require('through2-map');

let port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map(chunk => {
            return chunk.toString().toUpperCase(); 
        })).pipe(res);
    } else {
        res.statusCode(404).send('This request is not a POST request');
    }
});

server.listen(port);