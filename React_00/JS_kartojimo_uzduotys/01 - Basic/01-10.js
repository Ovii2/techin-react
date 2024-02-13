/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
*/

const n1 = +prompt(`Enter a number`);
const n2 = +prompt(`Enter a second number`);

const multiplication = () => {
  alert(`Multiplication result : ${n1 * n2}`);
};

const division = () => {
  alert(`Division result: ${(n1 / n2).toFixed(2)}`);
};

multiplication();
division();
