'use strict';

const squareSolver = (a, b, c) => {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) return ['Discriminant < 0'];
	if (discriminant === 0) return [-b / (2 * a)];

	const xOne = (-b + discriminant ** 0.5) / (2 * a);
	const xTwo = (-b - discriminant ** 0.5) / (2 * a);

	return [xOne, xTwo];
};

console.log(...squareSolver(1, 4, -5)); // 1 -5
console.log(...squareSolver(1, -4, 4)); // -2
console.log(...squareSolver(1, 1, 2)); // Discriminant < 0
