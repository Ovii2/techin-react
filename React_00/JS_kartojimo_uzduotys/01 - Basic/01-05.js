/*
 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

const str = 'w3resource';

for (let i = 0; i < str.length; i++) {
  const endLetter = str.slice(-1);
  const result = endLetter + str.slice(0, -1);
  console.log(result);
}
