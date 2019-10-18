'use strict'

const fs = require('fs');
const printNroLines = (err, result) => {
    if (err) {
        return;
    }

    let lines = result.toString().split('\n').length - 1;
    console.log(lines);
}

fs.readFile(process.argv[2], printNroLines);