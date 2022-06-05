'use strict'
const http = require('http')
const { BufferList } = require('bl')

const url = process.argv[2]
const bl = new BufferList()
var length = 0

http.get(url, res => {
	res.on('data', data => {
		length += data.toString().length
		bl.append(data)
		
	}).on('end', () => {
		console.log(length)
		console.log(bl.toString())
	})
})


/*
'use strict'
const http = require('http')
const bl = require('bl')
http.get(process.argv[2], res => {
	res.pipe(bl((err, data) => {
		if (err) {
			return console.error(err)
		}
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})
*/