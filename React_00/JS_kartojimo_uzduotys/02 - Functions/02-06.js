/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/
const findLongestWord = (str) => {
  const longestWord = str.split(' ').sort((a, b) => {
    return b.length - a.length;
  });
  return longestWord[0];
};

console.log(findLongestWord('Web Development Tutorial'));
