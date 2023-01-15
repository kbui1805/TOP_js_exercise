const palindromes = function (word_test) {
    let result = false;
    let word_test_arr = word_test.split("")
    .filter((char) => {
        let pattern = /\w/;
        return pattern.test(char);
    })
    .map((char) => {
        return char.toLowerCase();
    });

    let original_word = word_test_arr.join('');
    let reverse_word = (() => {
        let reverse_arr = [];
        word_test_arr.map((char) => {
            reverse_arr.unshift(char);
        });
        return reverse_arr;
    })().join('');

    if(original_word === reverse_word) {
        result = true;
    }
    
    return result;
};

// Do not edit below this line
module.exports = palindromes;
