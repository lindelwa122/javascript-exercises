/* 
    PSEUDOCODE

    split the string to a list and create a variable called splittedString that stores the result
    reverse splittedString
    join splittedString using '' as a sperator and return the results

*/

const reverseString = function(word) {
    const splittedString = word.split('')
    splittedString.reverse();
    return splittedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
