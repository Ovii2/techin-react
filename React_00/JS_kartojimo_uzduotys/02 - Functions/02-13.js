/*
Write a JavaScript function to compute the factors of a positive integer.
*/

const factorsOfPositive = (n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
};

console.log(factorsOfPositive(6));
