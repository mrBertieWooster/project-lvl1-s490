import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const isPrime = (number) => {
  if (number < 1) {
    return false;
  }
  const iter = (acc) => {
    if (number === 1 || number === acc) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(number, acc + 1);
  };
  return iter(number, 2);
};

const prepareDataPrime = () => {
  const number = genNum(2, 10);
  const answer = (isPrime(number)) ? 'yes' : 'no';
  const question = number;

  return cons(answer, question);
};

export default () => process(prepareDataPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
