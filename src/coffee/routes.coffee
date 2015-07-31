class Routes extends Config

	constructor: ( $locationProvider, $routeProvider ) ->

		$locationProvider.html5Mode true

		$routeProvider

			.when '/',
				controller: 'view1Controller'
				templateUrl: 'pages/view1.html'

			.when '/view2',
				controller: 'view2Controller'
				templateUrl: 'pages/view2.html'

			.otherwise
				redirectTo: '/'