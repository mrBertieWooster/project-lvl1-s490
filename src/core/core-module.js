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

export const greeting = (quest) => {
  console.log('Welcome to the Brain Games!');
  console.log(quest);
  const playerName = askUser('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
