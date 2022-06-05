'use strict'
const http = require('http')
const map = require('through2-map')
const port = process.argv[2]

http.createServer((req, res) => {
	if (req.method !== "POST") return console.error("only POST request")
	
	res.writeHead(200, {'Content-Type':'text/plain'})
	req.pipe(map((chunk) => {
		return chunk.toString().toUpperCase()
	})).pipe(res)

}).listen(port)

