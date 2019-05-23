import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

export const getSign = () => {
  const arr = ['+', '-', '*'];
  const rIndex = Math.floor(Math.random() * 3);
  return arr[rIndex];
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

const getGameQuestionCalc = () => 'What is the result of the expression?';

const prepareDataCalc = () => {
  const number1 = genNum(2, 10);
  const number2 = genNum(2, 10);
  const sign = getSign();
  const answer = evalExpr(number1, number2, sign);
  const question = `${number1} ${sign} ${number2}`;

  return cons(answer, question);
};

export default () => process(prepareDataCalc, getGameQuestionCalc());
