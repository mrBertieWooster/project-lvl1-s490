#!/usr/bin/env node

import { askUser, process, printResult } from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (process('brain-prime')) {
  printResult(1, playerName);
} else {
  printResult(0, playerName);
}
