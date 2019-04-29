import readlineSync from 'readline-sync';

const askUser = () => {
  const actual = readlineSync.question('May I have your name?: ');
  return console.log(`Hello, ${actual}!`);
}

export default askUser;
