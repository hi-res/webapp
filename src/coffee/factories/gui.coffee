class GUI extends Factory

	constructor: ( ENV ) ->

		class Folder
			add:      -> return @
			listen:   -> return @
			name:     -> return @
			open:     -> return @
			onChange: -> return @
			addFolder: -> new Folder
			addColor: -> return @

		class GUIWrapper

			add:       -> return @
			addFolder: -> new Folder
			name:      -> return @
			close:     -> return @
			step: -> return @
			onChange: -> return @
			setValue: -> return @
			listen: -> return @

		if ENV.GUI
			gui = new dat.GUI(width: 350)
			gui.open()
		else
			gui = new GUIWrapper

		return gui