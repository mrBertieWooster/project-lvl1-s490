#!/usr/bin/env node

import { askUser, process, printResult } from '../..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (process('brain-gcd')) {
  printResult(1, playerName);
} else {
  printResult(0, playerName);
}
