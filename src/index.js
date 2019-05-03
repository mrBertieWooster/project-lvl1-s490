import readlineSync from 'readline-sync';

export const askUser = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

export const checkAnswer = (str, num) => {
  if (str !== 'yes' && str !== 'no') {
    return false;
  }
  if (num % 2 === 0 && str === 'no') {
    return false;
  }
  return true;
};

export const genNum = () => {
  const min = 2;
  const max = 100;
  return Math.floor(Math.random() * (max - min));
};

export const process = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = genNum();
    console.log(`Question: ${num}`);
    const answer = askUser('Your answer:');
    if (checkAnswer(answer, num)) {
      console.log('Correct!');
    } else {
      return false;
    }
  }
  return true;
};
