clean:
	rm -rf .git

setup:
	make clean
	git config core.fileMode false
	npm install

dev:
	NODE_ENV=development gulp

release:
	NODE_ENV=development gulp build

spritesheet:
	cd gulp/svg && NODE_ENV=production gulp

preview:
	NODE_ENV=production gulp