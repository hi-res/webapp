setup:
	git config core.fileMode false
	npm install

watch:
	NODE_ENV=development gulp

spritesheet:
	cd gulp/svg && NODE_ENV=production gulp

development:
	NODE_ENV=development gulp build

staging:
	NODE_ENV=staging gulp build

production:
	NODE_ENV=production gulp build

preview:
	NODE_ENV=production gulp