AppView = require 'views/app_view'

module.exports = class HomeView extends AppView

	constructor: ->

		c.log 'view --> home'

		do @bind

	bind: ->

		$(window).one 'before:render', @destroy

	unbind: ->


	destroy: =>

		do @unbind