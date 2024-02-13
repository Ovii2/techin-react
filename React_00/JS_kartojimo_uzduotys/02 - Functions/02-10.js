/*
Write a JavaScript function which returns the n rows by n columns identity matrix.
*/

const matrix = (rows, columns) => {
  return Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(0));
};

console.table(matrix(5, 8));
