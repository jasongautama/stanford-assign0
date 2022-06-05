'use strict'
const fs = require('fs')
const path_pkg = require('path')
module.exports = function (path, extfile, callback) {

	fs.readdir(path, (err, files) => {
		if (err) return callback(err)
		const list_files = files.filter(file => {
			return path_pkg.extname(file) === '.' + extfile
		})
		/*
		//Original solution using ForEach
		let list_files = []
		files.forEach(file => {
			if (path_pkg.extname(file) === '.' + extfile) {
				list_files.push(file)
			}
		})
		*/
		callback(null, list_files)
	})
} 