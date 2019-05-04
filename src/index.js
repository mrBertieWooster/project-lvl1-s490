import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const askUser = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

export const checkAnswerEven = (str, num) => {
  if (str !== 'yes' && str !== 'no') {
    return false;
  }
  if (num % 2 === 0 && str === 'no') {
    return false;
  }
  return true;
};

export const checkAnswer = (answer, expr) => {
  if (Number(answer) === Number(expr)) {
    return true;
  }
  return false;
};

export const genNum = () => {
  const min = 2;
  const max = 10;
  return Math.floor(Math.random() * (max - min));
};

export const getSign = () => {
  const arr = ['+', '-', '*'];
  const rIndex = Math.floor(Math.random() * 3);
  return arr[rIndex];
};

export const evalExpr = (expr) => {
  if (cdr(expr) === '*') {
    return car(car(expr)) * cdr(car(expr));
  } if (cdr(expr) === '-') {
    return car(car(expr)) - cdr(car(expr));
  }
  return car(car(expr)) + cdr(car(expr));
};

export const makeExpression = () => {
  const result = cons(cons(genNum(), genNum()), getSign());
  return result;
};

export const makeProgression = () => {
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

export const cutProgMember = (prog) => {
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

export const evalGCD = (pair) => {
  if (cdr(pair) === 0) {
    return car(pair);
  }
  return evalGCD(cons(cdr(pair), car(pair) % cdr(pair)));
};

export const processEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = genNum();
    console.log(`Question: ${num}`);
    const answer = askUser('Your answer: ');
    if (checkAnswerEven(answer, num)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${num}.`);
      return false;
    }
  }
  return true;
};

export const processCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const expr = makeExpression();
    const result = evalExpr(expr);
    console.log(`Question: ${car(car(expr))} ${cdr(expr)} ${cdr(car(expr))}`);
    const answer = askUser('Your answer: ');
    if (checkAnswer(answer, result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      return false;
    }
  }
  return true;
};

export const processGCD = () => {
  for (let i = 0; i < 3; i += 1) {
    const pair = cons(genNum(), genNum());
    const result = evalGCD(pair);
    console.log(`Question: ${car(pair)} ${cdr(pair)}`);
    const answer = askUser('Your answer: ');
    if (checkAnswer(answer, result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      return false;
    }
  }
  return true;
};

export const processProg = () => {
  for (let i = 0; i < 3; i += 1) {
    const prog = makeProgression();
    const result = cutProgMember(prog);
    console.log(`Question: ${cdr(result)}`);
    const answer = askUser('Your answer: ');
    if (checkAnswer(answer, car(result))) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      return false;
    }
  }
  return true;
};
