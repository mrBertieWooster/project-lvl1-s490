#!/usr/bin/env node

import { askUser, processCalc } from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (processCalc()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
