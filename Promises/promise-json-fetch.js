'use strict' 

const http = require('q-io/http');
const request = {
    url: 'http://localhost:1337',
    method: 'GET',
    scheme: 'https'
};

http.read(request)
    .then((data) => {
        console.log(JSON.parse(data));
    })
    .then(null, console.log)
    .done();