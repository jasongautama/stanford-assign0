'use strict'
const dirpath = process.argv[2]
const arg_file = process.argv[3] 
const mymodule = require('./mymodule')

/*
mymodule(dirpath, arg_file, myfunc)

function myfunc (err, files) {
	if(err) console.error(err)

	files.forEach(file => {
		console.log(file)	
	})
	
}
*/

//calling function from mymodule.js asynchronously
mymodule(dirpath, arg_file, (err, files) => {
	if(err) return console.error(err)

	files.forEach(file => {
		console.log(file)	
	})
})