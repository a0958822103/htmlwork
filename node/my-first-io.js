const fs = require('fs')
const x = fs.readFileSync(process.argv[2]).toString('\n').split().length;
const y = x-1;
console.log(y);