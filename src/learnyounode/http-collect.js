const http = require('http')
const url = process.argv[2]

'use strict'

http.get(url, res => {

	res.setEncoding('utf8')
	res.on('data', data => {
		console.log(data)
	})

	res.on('data', data => {
		console.log(data)
	})

})
//# of chars received by the server
//complete string of characters