/*
Write a JavaScript function that returns array elements larger than a number.
*/

const arr = [1, 6, 8, 10, 54];

const largerThan = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(largerThan(arr, 4));
