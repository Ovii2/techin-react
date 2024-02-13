/*
 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return `Leap year`;
  } else {
    return `Not leap year`;
  }
};

console.log(leapYear(2024));
console.log(leapYear(2020));
console.log(leapYear(1899));
