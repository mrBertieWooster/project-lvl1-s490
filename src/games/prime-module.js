import { cons } from 'hexlet-pairs';
import { genNum } from '../core/core-module';
import process from '..';

const isPrime = (num) => {
  const iter = (number, acc) => {
    if (number === 1 || number === acc) {
      return 'yes';
    }
    if (number % acc === 0) {
      return 'no';
    }
    return iter(num, acc + 1);
  };
  return iter(num, 2);
};

const prepareDataPrime = () => {
  const expr = genNum();
  const result = isPrime(expr);
  const strForDisplay = expr;

  return cons(result, strForDisplay);
};

const startPrime = (gameQuest) => {
  process(prepareDataPrime, gameQuest);
};

export default startPrime;
