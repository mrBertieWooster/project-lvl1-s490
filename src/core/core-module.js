import readlineSync from 'readline-sync';

export const askUser = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

export const printResult = (res, playerName) => {
  if (res > 0) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const checkAnswer = (answer, result) => {
  if (answer !== result) {
    return false;
  }
  return true;
};

export const genNum = () => {
  const min = 2;
  const max = 10;
  return Math.floor(Math.random() * (max - min) + min);
};

export const getSign = () => {
  const arr = ['+', '-', '*'];
  const rIndex = Math.floor(Math.random() * 3);
  return arr[rIndex];
};

export const greeting = (gameName) => {
  console.log('Welcome to the Brain Games!');
  let result = '';
  if (gameName === 'brain-progression') {
    result = 'What number is missing in the progression?';
  } else if (gameName === 'brain-calc') {
    result = 'What is the result of the expression?';
  } else if (gameName === 'brain-gcd') {
    result = 'Find the greatest common divisor of given numbers.';
  } else if (gameName === 'brain-prime') {
    result = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  } else if (gameName === 'brain-even') {
    result = 'Answer "yes" if number even otherwise answer "no"';
  } else {
    return console.log('game not found');
  }
  console.log(result);
  const playerName = askUser('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
