'use strict'

const net = require('net')
const port = process.argv[2]

const digitFormatter = (func) => {
	return ("0" + func).slice(-2)
}

const server = net.createServer((socket) => {
	const d = new Date()
	//starting from idx 0; Jan(0), Feb(1), .., Dec(11)
	const month = digitFormatter(d.getMonth() + 1)
	const date = digitFormatter(d.getDate())
	const hours = digitFormatter(d.getHours())
	const minutes = digitFormatter(d.getMinutes())
	//YYYY-MM-DD hh:mm\n
	const data = d.getFullYear() + "-" + month 
		+ "-" + date + " " + hours + ":" + minutes + "\n"
	socket.end(data) //or socket.write(data)

})

server.listen(port)







