class App extends App

	constructor: ->

		angular.element( document ).ready () => @start()

		return [
			'ngAria'
			'ngRoute'
			'ngLodash'
			'ngAnimate'
		]
	
	start: ->

		angular.bootstrap document, ['app']