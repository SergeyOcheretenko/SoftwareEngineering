'use strict';

const fs = require('fs')

const readline = require('readline-sync');
const PATH = process.argv[2];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const checkNumber = (number) => isNaN(Number(number)) ? false : true;

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

const pathMethod = () => {
    try {
        const data = fs.readFileSync(PATH, 'utf8')
        const coefficients = data.slice(0, data.length - 2).split(' ');
        if (!coefficients.every(checkNumber) || coefficients.length !== 3) {
            return 'The file does not contain numbers.';
        }
        return squareSolver(...coefficients);
    } catch (err) {
        return 'This file doesnt exists.';
    }
};

if (PATH) {
    console.log(pathMethod());
} else {
    console.log(readlineMethod());
}

// console.log(pathMethod());
// console.log(readlineMethod());

// console.log(...squareSolver(1, 4, -5)); // 1 -5
// console.log(...squareSolver(1, -4, 4)); // -2
// console.log(...squareSolver(1, 1, 2)); // Discriminant < 0
