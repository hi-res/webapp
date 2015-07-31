class Browser extends Factory

	constructor: ->

		md = new MobileDetect( window.navigator.userAgent )

		mobile  = if md.mobile() is null then false else true
		tablet  = if md.tablet() is null then false else true
		desktop = ( mobile and tablet ) is false

		return {
			mobile: mobile
			tablet: tablet
			desktop: desktop
		}