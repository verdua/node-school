const fs = require('fs');

let string = fs.readFileSync(process.argv[2]).toString();
let lines = string.split('\n');

console.log(lines.length - 1);
