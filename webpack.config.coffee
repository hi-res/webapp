require 'coffee-script'

module.exports =

	output:
		filename: 'app.js'

	module:
		loaders: [
			{ test: /\.jade$/, loader: "jade" }
			{ test: /\.coffee$/, loader: 'coffee-loader' }
		]

	resolve:
		extensions: [ '', '.js', '.coffee' ]
		alias:
			app 		: __dirname + '/src/coffee'
			controllers : __dirname + '/src/coffee/controllers'
			views 		: __dirname + '/src/coffee/views'
			lib 		: __dirname + '/src/coffee/lib'
			templates   : __dirname + '/src/jade/templates'

	node:
		fs: "empty"