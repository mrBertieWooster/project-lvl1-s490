import { cons } from 'hexlet-pairs';
import { genNum } from '../core/core-module';
import process from '..';

const isEven = (expr) => {
  if (expr % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const prepareDataEven = () => {
  const expr = genNum();
  const result = isEven(expr);
  const strForDisplay = expr;

  return cons(result, strForDisplay);
};

const startEven = (gameQuest) => {
  process(prepareDataEven, gameQuest);
};

export default startEven;
