import { cons, car, cdr } from 'hexlet-pairs';
import { genNum, getSign } from '../core/core-module';

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

const prepareCalc = () => {
  const expr = makeExpression();
  const result = evalExpr(expr);
  const strForDisplay = `${car(car(expr))} ${cdr(expr)} ${cdr(car(expr))}`;

  return cons(result, strForDisplay);
};

export default prepareCalc;
