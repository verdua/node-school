'use strict'

const net = require('net');

let portNumber = process.argv[2];

let server = net.createServer(socket => {
    socket.end(`${getFormatedDate()}\n`);
})

function getFormatedDate() {
    let date = new Date();
    return  date.getFullYear() + '-' +
            normalizedData(date.getMonth() + 1) + '-' +
            normalizedData(date.getDate()) + ' ' +
            normalizedData(date.getHours()) + ':' +
            normalizedData(date.getMinutes());
}

function normalizedData(data) {
    return (data < 10 ? '0' : '') + data; 
}

server.listen(portNumber);