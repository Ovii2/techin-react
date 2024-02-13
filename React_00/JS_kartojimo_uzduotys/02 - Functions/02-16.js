/*
Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

const uniqueChars = (str) => {
  let unique = '';

  for (let i = 0; i < str.length; i++) {
    if (unique.includes(str[i]) === false) {
      unique += str[i];
    }
  }
  return unique;
};

console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog'));
