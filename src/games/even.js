import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameQuestionEven = () => 'Answer "yes" if number even otherwise answer "no"';

const prepareDataEven = () => {
  const number = genNum(2, 10);
  const answer = (isEven(number)) ? 'yes' : 'no';
  const question = number;

  return cons(answer, question);
};

export default () => process(prepareDataEven, getGameQuestionEven());
