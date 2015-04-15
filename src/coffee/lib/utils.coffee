module.exports =

	lerp: ( min, max, ratio ) ->
		min + ((max - min) * ratio)

	delay: ( delay, func ) ->
		setTimeout func, delay * 1000

	interval: ( interval, func ) ->
		setInterval func, interval * 1000

	random: ( min, max ) ->
		min + Math.random() * (max - min)

	radians: ( degrees ) ->
		degrees * (Math.PI / 180)

	clamp: (min, max, val) ->
		val = Math.min max, val
		val = Math.max min, val