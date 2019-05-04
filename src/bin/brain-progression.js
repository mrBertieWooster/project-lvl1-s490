#!/usr/bin/env node

import { askUser, processProg } from '..';

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (processProg()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
