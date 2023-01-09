const repeatString = function(word, num_repeat) {
    let result = '';
    let i = 0;
    if (num_repeat < 0) {
        result = 'ERROR';
    }

    while(num_repeat && num_repeat > i ) {
        result += word;
        i++;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
