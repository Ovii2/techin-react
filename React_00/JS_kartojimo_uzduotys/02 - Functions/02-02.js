/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};

console.log(isPalindrome('vienas'));
console.log(isPalindrome('ana'));
