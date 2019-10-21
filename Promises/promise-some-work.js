'use strict' 

const http = require('q-io/http');

let dataBaseFetch = function(id) {
    return http.read(`http://localhost:7001/${id}`);
}

http.read('http://localhost:7000')
    .then(dataBaseFetch)
    .then(data => console.log(JSON.parse(data)))
    .then(null, console.error)
    .done();