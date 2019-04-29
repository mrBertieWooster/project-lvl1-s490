.DEFAULT_GOAL := start
install:
	install-deps

publish:
	npm publish --access=public

start: npx babel-node src/bin/brain-games.js
