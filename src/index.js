import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundCount = 3;

const askUser = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

const greeting = (quest) => {
  console.log('Welcome to the Brain Games!');
  console.log(quest);
  const playerName = askUser('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const process = (prepareData, gameQuest) => {
  const playerName = greeting(gameQuest);
  for (let i = 0; i < roundCount; i += 1) {
    const result = prepareData();
    const roundQuestion = cdr(result);
    const rightAnswer = car(result);
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = askUser('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default process;
