'use strict'
const fs = require('fs')
const path_pkg = require('path')
const path = process.argv[2]
const fileExtension = "." + process.argv[3] //.txt, .pdf

fs.readdir(path, (err, files) => {
	if (err) console.error(err)

	files.forEach(file => {
		//if (path_pkg.extname(file) === fileExtension) console.log(file)
		if (file.endsWith(fileExtension)) console.log(file)
		
	})
})
