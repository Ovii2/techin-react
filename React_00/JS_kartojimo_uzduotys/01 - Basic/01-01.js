/*
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22
*/
const date = new Date();
const dayName = date.toLocaleDateString('lt-LT', { weekday: 'long' });

console.log(`Today is : ${dayName}`);
console.log(`Current time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
