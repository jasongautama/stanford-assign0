'use strict'
const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const filepath = process.argv[3]

http.createServer((req, res) => {
	//can implement this way as well
	res.writeHead(200, {"content-type":"text/plain"})
	fs.createReadStream(filepath).pipe(res)
}).listen(port)

/*
const port = process.argv[2]
const filepath = process.argv[3]
const server = http.createServer((req, res) => {
	const readStream = fs.createReadStream(filepath)
	readStream.on('open', () => {
		readStream.pipe(res)
	})

	readStream.on('error', (err) => {
		res.end(err)
	})
})

server.listen(port)
*/