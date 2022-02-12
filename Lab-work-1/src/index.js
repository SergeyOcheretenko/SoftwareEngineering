'use strict';

const a = 1;
const b = 4;
const c = -5;

const squareSolver = (a, b, c) => {
	const discriminant = b ** 2 - 4 * a * c;
	
	const xOne = (-b + discriminant ** 0.5) / (2 * a);
	const xTwo = (-b - discriminant ** 0.5) / (2 * a);

	return [xOne, xTwo];
};

console.log(...squareSolver(a, b, c)); // 1 -5
