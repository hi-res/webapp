AppView = require 'views/app_view'

module.exports = class AboutView extends AppView

	constructor: ->

		c.log 'view --> about'

		do @bind

	bind: ->

		$(window).one 'before:render', @destroy

	unbind: ->


	destroy: =>

		do @unbind