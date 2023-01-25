const caesar = function(letters, shift_num) {
    let result = [];
    let letter_list = letters.split('');
    for (let letter of letter_list) {
        let coded_letter = letter;
        if (isLetter(letter) == 'lower') {
            coded_letter = String.fromCharCode(getShiftFactor(letter, shift_num));
        } else if (isLetter(letter) == 'upper') {
            coded_letter = String.fromCharCode(getShiftFactor(letter, shift_num)).toUpperCase();
        }
        result.push(coded_letter);
    }

    return result.join('');
};

const isLetter = function(char) {
    let pattern_lower = /[a-z]/;
    let pattern_upper = /[A-Z]/;
    if (pattern_lower.test(char)) {
        return 'lower';
    }
    if (pattern_upper.test(char)) {
        return 'upper';
    }

    return 'none';
};

const getShiftFactor = function(char, shift) {
    let current_char_code = char.toLowerCase().charCodeAt(0);
    let starting = 97;
    let ending = 122;

    let result_code = current_char_code + shift;
    if (result_code > ending) {
        while (result_code > ending) {
            result_code = starting + (result_code - ending - 1);
        }
        return result_code;
    } else if( result_code < starting) {
        while (result_code < starting) {
            result_code = ending - (starting - result_code - 1);
        }
    
        return result_code;
    } else {return result_code;}
    
};

// Do not edit below this line
module.exports = caesar;
