import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return String(num1);
  }
  return findGCD(num2, num1 % num2);
};

const getGameQuestionGCD = () => 'Find the greatest common divisor of given numbers.';

const prepareDataGCD = () => {
  const number1 = genNum(2, 10);
  const number2 = genNum(2, 10);
  const answer = findGCD(number1, number2);
  const question = `${number1} ${number2}`;

  return cons(answer, question);
};

export default () => process(prepareDataGCD, getGameQuestionGCD());
