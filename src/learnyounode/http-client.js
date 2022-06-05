const http = require('http')
const url = process.argv[2]

'use strict'

http.get(url, (res) => {
	res.setEncoding('utf8')
	// Where the response object is a Node Stream object. You can treat Node
  	// Streams as objects that emit events. The three events that are of most
  	// interest are: "data", "error" and "end".
	let rawData = ''
	res.on('data', chunk => {
		console.log(chunk)
	})


})