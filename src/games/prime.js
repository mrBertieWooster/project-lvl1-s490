import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const isPrime = (num) => {
  const iter = (number, acc) => {
    if (number === 1 || number === acc) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(num, acc + 1);
  };
  return iter(num, 2);
};

const getGameQuestionPrime = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prepareDataPrime = () => {
  const number = genNum(2, 10);
  const answer = (isPrime(number)) ? 'yes' : 'no';
  const question = number;

  return cons(answer, question);
};

export default () => process(prepareDataPrime, getGameQuestionPrime());
