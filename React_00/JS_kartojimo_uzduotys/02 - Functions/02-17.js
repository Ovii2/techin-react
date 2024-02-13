/*
Write a JavaScript function to  get the number of occurrences of each letter in specified string.
*/

const countLetters = (str) => {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};
console.log(countLetters('stringg'));
