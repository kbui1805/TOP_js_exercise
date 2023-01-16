const fibonacci = function(num) {
    let result;
    let formated_num = Number.parseInt(num);
    let arr = [1, 1];
    if (formated_num <= 0) {
        result = 'OOPS';
    }
    if (formated_num == 1 || num == 2) {
        result = 1;
    }
    if (formated_num > 2) {
        let i = 2
        while(i <= formated_num) {
            let new_fibo_num = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(new_fibo_num);
            i++
        }
        result = arr[formated_num - 1];
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
