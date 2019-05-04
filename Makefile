.DEFAULT_GOAL := start
install:
	npm install

publish:
	npm publish --access=public

lint:
	npx eslint .

start:
	npx babel-node src/bin/brain-games.js

start-even:
	npx babel-node src/bin/brain-even.js

start-calc:
	npx babel-node src/bin/brain-calc.js

start-gcd:
	npx babel-node src/bin/brain-gcd.js

start-progression:
	npx babel-node src/bin/brain-progression.js

start-prime:
	npx babel-node src/bin/brain-prime.js
