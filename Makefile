.DEFAULT_GOAL := start
install:
	install-deps

start: npx babel-node src/bin/brain-games.js
