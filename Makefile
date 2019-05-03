.DEFAULT_GOAL := start
install:
	npm install

publish:
	npm publish --access=public

start:
	npx babel-node src/bin/brain-games.js

lint:
	npx eslint .

start-even:
	npx babel-node src/bin/brain-even.js

start-calc:
	npx babel-node src/bin/brain-calc.js
