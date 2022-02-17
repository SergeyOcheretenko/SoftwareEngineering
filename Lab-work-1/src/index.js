'use strict';

const readline = require('readline-sync');
const args = process.argv.slice(2);

const squareSolver = (a, b, c) => {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) 
        return 'Discriminant < 0';
	
    if (discriminant === 0) 
        return `Only one solution: ${-b / (2 * a)}`;

	const xOne = (-b + discriminant ** 0.5) / (2 * a);
	const xTwo = (-b - discriminant ** 0.5) / (2 * a);

	return `First solution: ${xOne}, second solution: ${xTwo}`;
};

const readlineMethod = () => {
    const a = readline.question('Input number a: ');
    const b = readline.question('Input number b: ');
    const c = readline.question('Input number c: ');
    
    return squareSolver(a, b, c);
};

console.log(readlineMethod());

// console.log(...squareSolver(1, 4, -5)); // 1 -5
// console.log(...squareSolver(1, -4, 4)); // -2
// console.log(...squareSolver(1, 1, 2)); // Discriminant < 0
