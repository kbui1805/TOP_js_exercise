const sumAll = function(num_start, num_end) {

    if((Number.isInteger(num_start) && num_start >= 0) && (Number.isInteger(num_end) && num_end >= 0)) {
        let result = num_end;
        let next = (() => { return num_start < num_end ? 1 : -1})();
        let i = num_start;

        if(num_start == num_end) {
            return num_start;
        }

        while (i != num_end) {
            result = result + i;
            i+=next;
        }
        
        return result;
    }

    return "ERROR";

    
};

// sumAll(1, 4);



// Do not edit below this line
module.exports = sumAll;
