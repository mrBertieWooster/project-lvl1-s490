import { cons } from 'hexlet-pairs';
import genNum from '../utils';
import process from '..';

const gameQuestionPrime = 'What number is missing in the progression?';
const progressionMemberCount = 10;

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
  const progToArr = prog.split(' ');
  const hiddenMember = genNum(0, progToArr.length);
  let rightNumber = 0;
  for (let i = 0; i < progToArr.length; i += 1) {
    if (i === hiddenMember) {
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
  const expr = makeProgression(startNumber, step, progressionMemberCount);
  const resPair = cutProgMember(expr);

  return resPair;
};

export default () => process(prepareDataProg, gameQuestionPrime);
