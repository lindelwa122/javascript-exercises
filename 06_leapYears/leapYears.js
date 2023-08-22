/*

definition of a leapYear

year divisible by 4

HOWEVER,

year divisible by 100 !== leapYear

UNLESS,

year divisible by 400

*/

const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    }

    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
