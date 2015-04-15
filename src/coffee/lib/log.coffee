module.exports =

	enable: off

	clear: () ->

		if console? and console.clear?
			console.clear()

	log: (args...) ->

		if @enable
			if console? and console.log? and console.log.apply?
				console.log args...
			else
				console.log args

	debug: (args...) ->

		if @enable
			if console? and console.debug? and console.debug.apply?
				console.debug args...
			else
				console.log args

	info: (args...) ->

		if @enable
			if console? and console.info? and console.info.apply?
				console.info args...
			else
				console.log args

	warn: (args...) ->

		if @enable
			if console? and console.warn? and console.warn.apply?
				console.warn args...
			else
				console.log args

	error: (args...) ->

		if @enable
			if console? and console.error? and console.error.apply?
				console.error args...
			else
				console.log args