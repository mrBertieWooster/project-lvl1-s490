.DEFAULT_GOAL := start
install:
	npm install

start: npx babel-node src/bin/brain-games.js