const repeatString = function (word, times) {
    if (times < 0) {
        return 'ERROR';
    }

    let result = '';
    while (times !== 0) {
        result += word;
        times--;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
