import { cons, car, cdr } from 'hexlet-pairs';
import genNum from '../core/core-module';

const evalGCD = (pair) => {
  if (cdr(pair) === 0) {
    return String(car(pair));
  }
  return evalGCD(cons(cdr(pair), car(pair) % cdr(pair)));
};

const prepareGCD = () => {
  const expr = cons(genNum(), genNum());
  const result = evalGCD(expr);
  const strForDisplay = `${car(expr)} ${cdr(expr)}`;

  return cons(result, strForDisplay);
};

export default prepareGCD;
