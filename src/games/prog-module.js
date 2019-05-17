import { cons } from 'hexlet-pairs';
import { genNum } from '../core/core-module';
import process from '..';

const makeProgression = () => {
  const diff = genNum();
  const start = genNum();
  const iter = (count, acc, lastIndex) => {
    if (count < 1) {
      return acc;
    }
    return iter(count - 1, `${acc} ${lastIndex + diff}`, lastIndex + diff);
  };
  return iter(10, start, start);
};

const cutProgMember = (prog) => {
  const rnd = genNum();
  const progToArr = prog.split(' ');
  let num = 0;
  for (let i = 0; i < progToArr.length; i += 1) {
    if (i === rnd) {
      num = progToArr[i];
      progToArr[i] = '..';
    }
  }
  const result = cons(num, progToArr.join(' '));
  return result;
};

const prepareDataProg = () => {
  const expr = makeProgression();
  const resPair = cutProgMember(expr);

  return resPair;
};

const startProg = (gameQuest) => {
  process(prepareDataProg, gameQuest);
};

export default startProg;
