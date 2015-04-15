utils   = require 'lib/utils'
win     = require 'lib/window'
device  = require 'lib/device'
router  = require 'app/router'
happens = require 'happens'

module.exports = new class Navigation

	page  : ''

	constructor: ->

		happens @

		@el = $ 'body'
		@ui =
			'main' : 'main'

		for key, el of @ui
			@ui[key] = @el.find el

	start: ->

		do @_bind
		do @_set_page_css
		do @_rendered

		router.on 'url:changed', @url_changed


	###
	Bind all links
	###

	_bind: ->

		@el.find( 'a[href^="/"]' ).click ( event ) =>

			do event.preventDefault

			$el = $( event.currentTarget )

			return if $el.attr 'data-nobind'

			router.go $el.attr 'href'

	_set_page_css: ->

		do @el.removeClass

		@el.addClass env.BODY_CLASSES.join(' ')

	_render: ( div ) ->

		$(window).trigger 'before:render'

		# Render the new content
		@ui.main.html $( div ).find( '#main' ).children()

		# Update the new page title
		document.title = $( div ).find('title').text()

		# Apply new page id
		do @_set_page_css

		do @_rendered

		do @_bind


	_rendered: =>

		# Emit event to initalise components
		$(window).trigger 'after:render'

	###
	Handler for when the url changes
	###
	url_changed: ( url ) =>

		div = $ '<div>'

		###
		Load the next page and re-render the content
		###
		div.load url, =>

			$(window).trigger 'before:render'

			if device.firefox
				el = $('body, html')
			else
				el = @el

			delay = 0.3

			if el.scrollTop() > 0
				TweenLite.to el, delay, scrollTop: 0
			else
				delay = 0

			utils.delay delay, =>
				@_render div
