#!/usr/bin/env node

import { askUser, processEven } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (processEven()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
