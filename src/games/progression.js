import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const makeProgression = (startNumber, step, memberCount) => {
  const iter = (count, acc, lastIndex) => {
    if (count < 1) {
      return acc;
    }
    return iter(count - 1, `${acc} ${lastIndex + step}`, lastIndex + step);
  };
  return iter(memberCount, startNumber, startNumber);
};

const cutProgMember = (prog) => {
  const randomMember = genNum(2, 10);
  const progToArr = prog.split(' ');
  let rightNumber = 0;
  for (let i = 0; i < progToArr.length; i += 1) {
    if (i === randomMember) {
      rightNumber = progToArr[i];
      progToArr[i] = '..';
    }
  }
  const result = cons(rightNumber, progToArr.join(' '));
  return result;
};

const prepareDataProg = () => {
  const startNumber = genNum(2, 10);
  const step = genNum(2, 10);
  const memberCount = 10;
  const expr = makeProgression(startNumber, step, memberCount);
  const resPair = cutProgMember(expr);

  return resPair;
};

export default () => process(prepareDataProg, 'What number is missing in the progression?');
