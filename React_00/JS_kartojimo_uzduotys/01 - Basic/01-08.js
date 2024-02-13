/*
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/

const randomNumber = Math.floor(Math.random() * 11);

while (true) {
  const input = +prompt(`Guess the number`);
  if (input == ' ') {
    break;
  }
  if (input == randomNumber) {
    alert(`Good work!`);
    break;
  }
  alert(`Not matched`);
}
