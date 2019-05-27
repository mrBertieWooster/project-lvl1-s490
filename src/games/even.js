import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const gameQuestionEven = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => (number % 2 === 0);

const prepareDataEven = () => {
  const number = genNum(2, 10);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = number;

  return cons(answer, question);
};

export default () => process(prepareDataEven, gameQuestionEven);
