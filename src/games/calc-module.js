import { cons, car, cdr } from 'hexlet-pairs';
import { genNum, getSign } from '../core/core-module';
import process from '..';

const evalExpr = (expr) => {
  if (cdr(expr) === '*') {
    return String(car(car(expr)) * cdr(car(expr)));
  } if (cdr(expr) === '-') {
    return String(car(car(expr)) - cdr(car(expr)));
  }
  return String(car(car(expr)) + cdr(car(expr)));
};

const makeExpression = () => {
  const result = cons(cons(genNum(), genNum()), getSign());
  return result;
};

const prepareDataCalc = () => {
  const expr = makeExpression();
  const result = evalExpr(expr);
  const strForDisplay = `${car(car(expr))} ${cdr(expr)} ${cdr(car(expr))}`;

  return cons(result, strForDisplay);
};

const startCalc = (gameQuest) => {
  process(prepareDataCalc, gameQuest);
};

export default startCalc;
