import cons from 'hexlet-pairs';
import genNum from '../core/core-module';

const isEven = (expr) => {
  if (expr % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const prepareEven = () => {
  const expr = genNum();
  const result = isEven(expr);
  const strForDisplay = expr;

  return cons(result, strForDisplay);
};

export default prepareEven;
