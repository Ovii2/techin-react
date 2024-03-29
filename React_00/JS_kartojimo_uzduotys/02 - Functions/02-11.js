/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

const secondLowestAndGreates = (arr) => {
  const arrCopy = [...arr];
  const sLowest = arrCopy.sort((a, b) => a - b)[1];
  const sGreatest = arrCopy.sort((a, b) => b - a)[1];
  return `Second lowest : ${sLowest}, second greatest ${sGreatest}`;
};

console.log(secondLowestAndGreates([1, 2, 3, 4, 5]));
console.log(secondLowestAndGreates([6, 7, 8, 9, 10]));
