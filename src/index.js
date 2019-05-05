import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const askUser = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

export const printResult = (res, playerName) => {
  if (res > 0) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

const isEven = (expr) => {
  if (expr % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isPrime = (num) => {
  const iter = (number, acc) => {
    if (number === 1 || number === acc) {
      return 'yes';
    }
    if (number % acc === 0) {
      return 'no';
    }
    return iter(num, acc + 1);
  };
  return iter(num, 2);
};

const checkAnswer = (answer, result, gameName) => {
  console.log(`answer ${answer} ${typeof (answer)}`);
  console.log(`result ${result} ${typeof (result)}`);
  console.log(`game ${gameName}`);
  if (answer !== result) {
  // if (Number(answer) !== Number(result)) {
    return false;
  }
  return true;
};

const genNum = () => {
  const min = 2;
  const max = 10;
  return Math.floor(Math.random() * (max - min) + min);
};

const getSign = () => {
  const arr = ['+', '-', '*'];
  const rIndex = Math.floor(Math.random() * 3);
  return arr[rIndex];
};

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

const evalGCD = (pair) => {
  if (cdr(pair) === 0) {
    return String(car(pair));
  }
  return evalGCD(cons(cdr(pair), car(pair) % cdr(pair)));
};

export const process = (gameName) => {
  for (let i = 0; i < 3; i += 1) {
    let result = '';
    let strForDisplay = '';
    if (gameName === 'brain-progression') {
      const expr = makeProgression();
      const resPair = cutProgMember(expr);
      result = car(resPair);
      strForDisplay = cdr(resPair);
    } else if (gameName === 'brain-calc') {
      const expr = makeExpression();
      result = evalExpr(expr);
      strForDisplay = `${car(car(expr))} ${cdr(expr)} ${cdr(car(expr))}`;
    } else if (gameName === 'brain-gcd') {
      const expr = cons(genNum(), genNum());
      result = evalGCD(expr);
      strForDisplay = `${car(expr)} ${cdr(expr)}`;
    } else if (gameName === 'brain-prime') {
      const expr = genNum();
      result = isPrime(expr);
      strForDisplay = expr;
    } else {
      const expr = genNum();
      result = isEven(expr);
      strForDisplay = expr;
    }
    console.log(`Question: ${strForDisplay}`);
    const answer = askUser('Your answer: ');
    if (checkAnswer(answer, result, gameName)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      return false;
    }
  }
  return true;
};
