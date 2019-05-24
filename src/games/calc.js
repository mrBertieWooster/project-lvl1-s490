import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

export const getSign = () => {
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const evalExpr = (number1, number2, sign) => {
  switch (sign) {
    case '*':
      return String(number1 * number2);
    case '-':
      return String(number1 - number2);
    default:
      return String(number1 + number2);
  }
};

const prepareDataCalc = () => {
  const number1 = genNum(2, 10);
  const number2 = genNum(2, 10);
  const sign = getSign();
  const answer = evalExpr(number1, number2, sign);
  const question = `${number1} ${sign} ${number2}`;

  return cons(answer, question);
};

export default () => process(prepareDataCalc, 'What is the result of the expression?');
