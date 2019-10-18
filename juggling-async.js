'use strict'

const http = require('http');
const bl = require('bl');

let count = 0;
let results = new Array(3);

function printResults () {
    results.forEach(result => {
        console.log(result);
    });
}

function httpGet(index) {
    let url = process.argv[2 + index];
    http.get(url, resp => {
        resp.pipe(bl((error, data) => {
            if (error) return console.error(error);

            count++;
            results[index] = data.toString();
            
            if (count === 3) {
                printResults();
            }
        }))
    }) 
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}