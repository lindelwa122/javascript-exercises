const reverseArrCopy = (arr) => {
    // returns reversed copy without mutating the original
    const newArr = [];

    for (const item of arr) {
        newArr.unshift(item);
    }

    return newArr;
}

const palindromes = function (string) {
    const punctuations = ['.', ',', ' ', '!'];

    const newString = string.split('').filter((char, index) => {
        return !punctuations.includes(char);
    });

    const reversedString = reverseArrCopy(newString);

    return newString.join('').toLowerCase() 
        === reversedString.join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
