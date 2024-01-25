const getTheTitles = function(arr) {

    // first method
    // const titles = [];
    
    // for (const item of arr)  {
    //     titles.push(item.title);
    // }
    
    // second method
    const titles = arr.map(book => book.title);

    
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
