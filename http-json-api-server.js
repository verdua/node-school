'use strict'

const http = require('http');
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let url = new URL(req.url, 'http://localhost:' + port);
        let isoTime = url.searchParams.get('iso');
        let handler = getHandlerRequest(url.pathname);
        handler(isoTime, (error, data) => {
            if (error) {
                res.statusCode = 404;
                return res.end();
            } 

            res.writeHead(200, { 'content-type': 'application/json'});
            res.end(JSON.stringify(data));
        })
    } else {
        return res.end('Send a get request');
    }
})

server.listen(port);

function getHandlerRequest(pathname) {
    let handler = handlers[pathname];

    return handler !== undefined ? handler : notFound;
}

const handlers = {
    '/api/parsetime': parseTime,
    '/api/unixtime': unixTime
}

function parseTime(data, callback) {
    let date = new Date(data);
    
    let obj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    callback(null, obj);
}

function unixTime(data, callback) {
    let date = Date.parse(data);
    let obj = { unixtime: date};

    callback(null, obj);
}

function notFound(data, callback) {
    callback(404);
} 
