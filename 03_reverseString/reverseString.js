const reverseString = function(str) {
    let result = '';
    let str_split = str.split('');
    for (let char of str_split.reverse()) {
        result+= char;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
