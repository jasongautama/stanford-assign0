'use strict'
const fs = require('fs')
const path = process.argv[2]
fs.readFile(path, (err, file) => {
	if (err) return console.error(err)
	const len = file.toString().split('\n').length - 1
	console.log(len)
})

/*
fs.readFile(process.argv[2], countLine)

function countLine(err, file) {
	if (err) return console.error(err)
	const len = file.toString().split('\n').length - 1
	console.log(len)
}
*/