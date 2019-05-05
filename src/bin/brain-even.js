#!/usr/bin/env node

import { askUser, process, printResult } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (process('brain-even')) {
  printResult(1, playerName);
} else {
  printResult(0, playerName);
}
