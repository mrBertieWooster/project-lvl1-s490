import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const makeProgression = (startNumber, step) => {
  const memberCount = 10;
  const iter = (count, acc, lastIndex) => {
    if (count < 1) {
      return acc;
    }
    return iter(count - 1, `${acc} ${lastIndex + step}`, lastIndex + step);
  };
  return iter(memberCount, startNumber, startNumber);
};

const cutProgMember = (prog) => {
  const random = genNum(2, 10);
  const progToArr = prog.split(' ');
  let rightNumber = 0;
  for (let i = 0; i < progToArr.length; i += 1) {
    if (i === random) {
      rightNumber = progToArr[i];
      progToArr[i] = '..';
    }
  }
  const result = cons(rightNumber, progToArr.join(' '));
  return result;
};

const getGameQuestionProg = () => 'What number is missing in the progression?';

const prepareDataProg = () => {
  const expr = makeProgression(genNum(2, 10), genNum(2, 10));
  const resPair = cutProgMember(expr);

  return resPair;
};

export default () => process(prepareDataProg, getGameQuestionProg());
