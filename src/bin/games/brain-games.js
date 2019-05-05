#!/usr/bin/env node

import askUser from '../..';

console.log('Welcome to the Brain Games!');

console.log(`Hello, ${askUser('May I have your name?: ')}!`);
