/* 

PSEUDOCODE

Return sum of integers between start and end

Create a function that returns numbers between start and end (inclusively)

DEFINE findNumbersInBetween (start, end) => list:
  create an empty list called numbersInBetween
  begin with i at start and add 1 to i on each pass until i is smaller than or equal to end
    push i to numbersInBetween 

  return numbersInBetween

Create a function that adds all numbers in a list

DEFINE sum (list) => number:
  create a variable called total of type number that starts with 0

  for every item in the list create a variable called num
    increment total with num

  return total

DEFINE sumAll (start, end) => number:
  if start is negative or end is negative then 
    return 'ERROR'

  if type of start is not number or type of end is not number then
    return 'ERROR'

  return the sum of numbers in between start and end

*/

const findNumbersInBetween = function(start, end) {
  const numbersInBetween = [];

  if (start > end) {
    [start, end] = [end, start]
  }

  for (let i = start; i <= end; i++) {
    numbersInBetween.push(i);
  }

  return numbersInBetween;
};

const sum = function(list) {
  let total = 0;

  for (const num of list) {
    total += num;
  }

  return total;
}

const sumAll = function(start, end) {
  if (start < 0 || end < 0) return 'ERROR';

  if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';

  return sum(findNumbersInBetween(start, end));
};

// Do not edit below this line
module.exports = sumAll;
