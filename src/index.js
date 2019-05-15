import { car, cdr } from 'hexlet-pairs';
import {
  greeting, askUser, checkAnswer, printResult,
} from './core/core-module';
import prepareGCD from './games/gcd-module';
import preparePrime from './games/prime-module';
import prepareProg from './games/prog-module';
import prepareCalc from './games/calc-module';
import prepareEven from './games/even-module';

const process = (gameName) => {
  const playerName = greeting(gameName);
  for (let i = 0; i < 3; i += 1) {
    let result = '';
    if (gameName === 'brain-progression') {
      result = prepareProg();
    } else if (gameName === 'brain-calc') {
      result = prepareCalc();
    } else if (gameName === 'brain-gcd') {
      result = prepareGCD();
    } else if (gameName === 'brain-prime') {
      result = preparePrime();
    } else if (gameName === 'brain-even') {
      result = prepareEven();
    } else {
      console.log('game not found');
    }
    console.log(`Question: ${cdr(result)}`);
    const answer = askUser('Your answer: ');
    if (checkAnswer(answer, car(result))) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${car(result)}.`);
      printResult(0, playerName);
    }
  }
  printResult(1, playerName);
};

export default process;
