'use strict'
const fs = require('fs')

const buf = fs.readFileSync(process.argv[2]) //return Buffer object
const str = buf.toString().split('\n')
const lines = str.length - 1
console.log(lines)
//let count = 0
//for (; count < str.length; count++) {}
//console.log(count - 1)