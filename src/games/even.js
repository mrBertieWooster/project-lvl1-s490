import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const prepareDataEven = () => {
  const number = genNum(2, 10);
  const answer = (number % 2 === 0) ? 'yes' : 'no';
  const question = number;

  return cons(answer, question);
};

export default () => process(prepareDataEven, 'Answer "yes" if number even otherwise answer "no"');
