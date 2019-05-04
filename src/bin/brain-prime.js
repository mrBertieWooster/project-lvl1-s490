#!/usr/bin/env node

import { askUser, processPrime } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (processPrime()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
