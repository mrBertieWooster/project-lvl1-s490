import { car, cdr } from 'hexlet-pairs';
import {
  greeting, askUser, checkAnswer, printResult,
} from './core/core-module';

const process = (prepareData, quest) => {
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
