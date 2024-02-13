/*
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

const sortString = (str) => {
  return str.split('').sort().join('');
};

console.log(sortString('webmaster'));
