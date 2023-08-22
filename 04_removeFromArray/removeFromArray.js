/*

PSEUDOCODE

for each unwantedItem
    find its index and create a variable called index of type number to store it
    if index is zero or bigger then
        remove an item at position index of arr

return arr

*/

const removeFromArray = function (arr, ...unwantedItems) {
  unwantedItems.forEach((unwantedItem) => {
    const index = arr.findIndex((val) => val === unwantedItem);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  });

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
