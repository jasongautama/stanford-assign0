'use strict'
const http = require('http')
const url = require('url')
const port = process.argv[2]


const server = http.createServer((req, res) => {

	
	const urlData = new URL(req.url, `http://localhost:${port}`)

	let response = null
	const isoDate = urlData.searchParams.get('iso')
	if (urlData.pathname === "/api/parsetime") {
		const date = new Date(isoDate)
		response = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
	}
	else if (urlData.pathname === "/api/unixtime") {
		response = {"unixtime": Date.parse(isoDate)}
	}

	if (response) {
		res.writeHead(200, {'Content-Type':'application/json'})
		res.end(JSON.stringify(response))		
	} else {
		res.writeHead(404, {'Content-Type':'text/plain'})
		res.end('404 error')
	}

})

server.listen(port)