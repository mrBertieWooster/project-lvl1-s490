#!/usr/bin/env node

import { askUser, process, printResult } from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (process('brain-calc')) {
  printResult(1, playerName);
} else {
  printResult(0, playerName);
}
