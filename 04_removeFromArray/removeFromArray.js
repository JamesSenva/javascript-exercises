const removeFromArray = function(arr, ...args) {
    
    // first method using filter method
    // return arr.filter( ele => !args.includes(ele) );

    // second method using forEach method
    const newArr = [];
    arr.forEach( ele => {
        if(args.includes(ele)){
            newArr.push(ele);
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
