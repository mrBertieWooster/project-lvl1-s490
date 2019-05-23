import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const askUser = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

const printResult = (res, playerName) => {
  if (res > 0) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

const checkAnswer = (answer, result) => {
  if (answer !== result) {
    return false;
  }
  return true;
};

const greeting = (quest) => {
  console.log('Welcome to the Brain Games!');
  console.log(quest);
  const playerName = askUser('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const process = (prepareData, quest) => {
  console.log(`quest ${quest}`);
  const playerName = greeting(quest);
  for (let i = 0; i < 3; i += 1) {
    const result = prepareData();
    console.log(`Question: ${cdr(result)}`);
    const answer = askUser('Your answer: ');
    if (checkAnswer(answer, car(result))) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${car(result)}.`);
      return printResult(0, playerName);
    }
  }
  return printResult(1, playerName);
};

export default process;
