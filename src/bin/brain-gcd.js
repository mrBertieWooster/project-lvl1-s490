#!/usr/bin/env node

import { askUser, processGCD } from '..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (processGCD()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
