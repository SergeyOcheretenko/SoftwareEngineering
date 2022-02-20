'use strict';

const fs = require('fs')

const readline = require('readline-sync');
const PATH = process.argv[2];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const checkNumber = (number) => isNaN(Number(number)) ? false : true;

const squareSolver = (a, b, c) => {
	if (a === 0) {
        console.log('This is a linear equation!');
        console.log(`(${b}) * x + (${c}) = 0`);
        
        if (b === 0) {
            if (c === 0)
                return 'Infinite number of solutions';
            return 'No roots';
        } else {
            if (c === 0) return 'One root.\nx = 0'
            return `One solution.\nx = ${-c / b}`
        }
    }
    
    console.log('This is a quadratic equation!');
    console.log(`(${a}) * x^2 + (${b}) * x + (${c}) = 0`);

    const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) 
        return 'Discriminant < 0. No roots.';

     if (discriminant === 0) 
        return `Only one root.\nx = ${-b / (2 * a)}`;

	const xOne = (-b + discriminant ** 0.5) / (2 * a);
	const xTwo = (-b - discriminant ** 0.5) / (2 * a);

	return `There are 2 roots.\nx1 = ${xOne}\nx2 = ${xTwo}`;
};

const readlineMethod = () => {
    let a = readline.question('a = ');
    while(!checkNumber(a)) {
        console.log("It's not a number. Repeat please");
        a = readline.question('a = ');
    };
    
    let b = readline.question('b = ');
    while(!checkNumber(b)) {
        console.log("It's not a number. Repeat please");
        b = readline.question('b = ');
    };
    
    let c = readline.question('c = ');
    while(!checkNumber(c)) {
        console.log("It's not a number. Repeat please");
        c = readline.question('c = ');
    };

    return squareSolver(Number(a), Number(b), Number(c));
};

const pathMethod = () => {
    try {
        const data = fs.readFileSync(PATH, 'utf8')
        const coefficients = data.slice(0, data.length - 2).split(' ');
        if (!coefficients.every(checkNumber) || coefficients.length !== 3) {
            return 'The file does not contain numbers.';
        }
        
        const coefficientsNumbers = coefficients.map(elem => Number(elem));
        return squareSolver(...coefficientsNumbers);
    } catch (err) {
        return 'This file doesnt exists.';
    }
};

if (PATH) {
    console.log(pathMethod());
} else {
    console.log(readlineMethod());
}
