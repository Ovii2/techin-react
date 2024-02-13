/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/
const date = new Date();
const y = date.getFullYear();
const m = date.getMonth() + 1;
const d = date.getDay();

console.log(`${y}/${m}/${d}`);
