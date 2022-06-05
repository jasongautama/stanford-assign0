'use strict'
const http = require('http')
const bl = require('bl')
let result_data = []
let count = 0
const printResults = () => {
	for(let i = 0; i < result_data.length; i++) {
		console.log(result_data[i])
	}
}

const getData = idx => {
	http.get(process.argv[2 + idx], (res) => {
		res.pipe(bl((err,data) => {
			if (err) return console.error(err)
			result_data[idx] = data.toString()
			count++

			if (count === 3) {
				printResults()
			}
		}))
	})
}

for (let i = 0; i < 3; i++) {
	getData(i)
}

/*
'use strict'
const http = require('http')
const bl = require('bl')

const url1 = process.argv[2] 
const url2 = process.argv[3]
const url3 = process.argv[4]

const getData = url => {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			res.pipe(bl((err,data) => {
				if (err) {
					reject(err)
					//console.error(err)
					return
				}
				data = data.toString()
				//console.log(data)
				resolve(data)
				
			}))
		})
})
} 


getData(url1)
	.then( data1 => {
		console.log(data1)
		getData(url2)
			.then( data2 => {
				console.log(data2)
				getData(url3)
					.then (data3 => {
						console.log(data3)
					})
					.catch (err => console.error(err))
			})
			.catch (err => console.error(err))
	})
	.catch (err => console.error(err))
*/