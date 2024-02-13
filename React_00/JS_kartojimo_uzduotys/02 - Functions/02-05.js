/*
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

const transformToUpperCase = (str) => {
  const strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
};

console.log(transformToUpperCase('the quick brown fox'));
console.log(transformToUpperCase('very nice fairytale about something'));
