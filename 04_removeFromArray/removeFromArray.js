const removeFromArray = function(main_arr, ...num_remove) {
    let result = [];
    main_arr.map((main_element) => {
        let isRemove = num_remove.filter((num) => {
            return (num === main_element);
        }).length;
        if (!isRemove) {result.push(main_element)}
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
