import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

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

const process = (prepareData, quest) => {
  const playerName = greeting(quest);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const result = prepareData();
    console.log(`Question: ${cdr(result)}`);
    const answer = askUser('Your answer: ');
    if (String(answer) === String(car(result))) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${car(result)}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default process;
