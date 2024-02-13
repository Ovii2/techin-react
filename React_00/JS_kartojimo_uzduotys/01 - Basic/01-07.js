/*
Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
*/

const findFirstSunday = () => {
  let years = [];
  for (let i = 2014; i <= 2050; i++) {
    const firstJanuary = new Date(i, 0, 1);
    if (firstJanuary.getDay() === 0) {
      years.push(i);
    }
  }
  return years;
};

console.log(findFirstSunday());
