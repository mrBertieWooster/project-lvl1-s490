#!/usr/bin/env node

import { askUser, process } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');

const playerName = askUser('May I have your name?: ');
console.log(`Hello, ${playerName}!`);

if (process()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log('"yes" is wrong answer ;(. Correct answer was "no".');
  console.log(`Let's try again, ${playerName}!`);
}
