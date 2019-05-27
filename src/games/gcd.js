import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const gameQuestionGCD = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const prepareDataGCD = () => {
  const number1 = genNum(2, 10);
  const number2 = genNum(2, 10);
  const answer = String(findGCD(number1, number2));
  const question = `${number1} ${number2}`;

  return cons(answer, question);
};

export default () => process(prepareDataGCD, gameQuestionGCD);
