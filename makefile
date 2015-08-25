clean:
	rm -rf .git

setup:
	make clean
	npm install
	bower install
	make dev

watch:
	NODE_ENV=development gulp

release:
	NODE_ENV=production gulp build

spritesheet:
	cd gulp/svg && NODE_ENV=production gulp

preview:
	NODE_ENV=production gulp