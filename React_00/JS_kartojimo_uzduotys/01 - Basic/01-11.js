/*
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/

const c = 30;

const cToF = (c * 9) / 5 + 32;
const fToC = ((cToF - 32) * 5) / 9;

console.log(`${c}°C is ${cToF}°F`);
console.log(`${cToF}°F is ${fToC}°C`);
