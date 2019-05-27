import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const gameQuestionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const startNumber = 2;

  const iter = (acc) => {
    if (number === acc) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(number, acc + 1);
  };
  return iter(startNumber);
};

const prepareDataPrime = () => {
  const number = genNum(2, 10);
  const answer = (isPrime(number)) ? 'yes' : 'no';
  const question = number;

  return cons(answer, question);
};

export default () => process(prepareDataPrime, gameQuestionPrime);
