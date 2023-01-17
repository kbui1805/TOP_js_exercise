const getTheTitles = function(books_list) {
    let title_list = [];
    for (let {title} of books_list) {
        title_list.push(title);
    }
    return title_list;
};

// Do not edit below this line
module.exports = getTheTitles;
