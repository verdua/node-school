'use strict'

const http = require('http');
const fs = require('fs');

let port = process.argv[2];
let dirname = process.argv[3];

const server = http.createServer((req, res) => {
    let fileStream = fs.createReadStream(dirname);
    res.writeHead(200, { 'content-type': 'text/plain'});
    fileStream.pipe(res);
})

server.listen(port);