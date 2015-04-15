happens = require 'happens'
utils 	= require 'lib/utils'

class Window

	window        : $ window
	body          : $ 'body'
	width         : 0
	height        : 0
	scroll_timer  : null
	scroll_top    : 0
	scroll_percent: 0

	constructor: ->

		happens @

		@window.on 'resize',  @resize
		@window.on 'scroll',  @scroll
		@window.on 'keydown', @keydown

		do @resize

	resize: =>

		@width  = @window.width()
		@height = @window.height()

		@emit 'resize'

	scroll: ( event ) =>

		clearTimeout @scroll_timer

		unless @body.hasClass 'scrolling'
			@body.addClass 'scrolling'

		@scroll_timer = setTimeout( =>

			@body.removeClass 'scrolling'

		, 100 )

		scroll_top = @window.scrollTop()

		if scroll_top > @scroll_top
			direction = 'down'
		else
			direction = 'up'

		@scroll_top = scroll_top

		percent  		= scroll_top / (@body[0].scrollHeight - @height)
		@scroll_percent = utils.clamp 0, 1, percent

		@emit 'scroll', @scroll_percent, @scroll_top

		do event.preventDefault

	keydown: ( event ) =>

		key = event.keyCode

		switch key

			when 38
				key = 'up'

			when 40
				key = 'down'

			when 37
				key = 'left'

			when 39
				key = 'right'

		@emit "keydown", key


module.exports = new Window