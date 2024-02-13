/*
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
*/

const base = +prompt('Enter base');
const exponent = +prompt('Enter exponent');

const compute = (b, e) => b ** e;

alert(`Result : ${compute(base, exponent)}`);
