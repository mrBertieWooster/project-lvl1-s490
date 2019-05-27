import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const gameQuestionCalc = 'What is the result of the expression?';

export const getSign = () => {
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const evalExpr = (number1, number2, sign) => {
  switch (sign) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    default:
      return number1 + number2;
  }
};

const prepareDataCalc = () => {
  const number1 = genNum(2, 10);
  const number2 = genNum(2, 10);
  const sign = getSign();
  const answer = String(evalExpr(number1, number2, sign));
  const question = `${number1} ${sign} ${number2}`;

  return cons(answer, question);
};

export default () => process(prepareDataCalc, gameQuestionCalc);
