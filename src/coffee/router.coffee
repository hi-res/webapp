happens = require 'happens'

module.exports = new class Router

	_url: String

	constructor: ->

		happens @

		History.Adapter.bind window, "statechange", @on_state_change

		@_url = @url().replace window.location.href, ''

	on_state_change: =>

		State = History.getState()

		@_url = @url()

		c.log '%c[router::on_state_change]', 'background:#000; color: #fff', @_url

		@emit 'url:changed', @_url

	url: -> window.location.href.replace window.location.origin, ''

	go: ( url ) ->

		return if url is @url

		title = document.title

		History.pushState null, null, url

		document.title = title

	back: -> do History.back