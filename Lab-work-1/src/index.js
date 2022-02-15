'use strict';

// const readline = require('readline');
const inquirer = require('inquirer');

const squareSolver = (a, b, c) => {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) return ['Discriminant < 0'];
	if (discriminant === 0) return [-b / (2 * a)];

	const xOne = (-b + discriminant ** 0.5) / (2 * a);
	const xTwo = (-b - discriminant ** 0.5) / (2 * a);

	return [xOne, xTwo];
};

function consoleMethod() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

(async () => {
  const answer1 = await ask('Введите пример 1: ');
  const answer2 = await ask('Введите пример 2: ');
  console.log(`ответ1 = ${answer1}, ответ2 = ${answer2}`);
})();

async function ask(question) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(question, (x) => {
      rl.close();
      resolve(x);
    });
  });
}
 
const readline = require('readline-sync');

const name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");

const a = readline.question("What is your a?");

console.log(a);

const args = process.argv.slice(2);

// let question = [
//     {
//         type: 'input',
//         name: 'A'
//     }
// ];
// inquirer.prompt(question).then(answer => {
//     console.log(answer);
// })

// console.log(...squareSolver(1, 4, -5)); // 1 -5
// console.log(...squareSolver(1, -4, 4)); // -2
// console.log(...squareSolver(1, 1, 2)); // Discriminant < 0
