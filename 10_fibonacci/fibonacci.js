const fibonacci = function(n) {
    // convert n to number data types
    n = +n;

    // if the n is 0 or 1 return respective number
	if (n === 0 || n === 1) {
        return n;
    } else if (n > 1) {
        // declare default values in an array
        const fibNums = [0, 1];
        // variable to hold the final fobonacci number
        let fibonacciNum;

        // counter start from 2 because 0 and 1 are already in the above variable named fibNums, runs until less than or equal to n
        for (let i = 2; i <= n; i++) {
            // returns the total of the 0, 1 and stores in fibN
            let fibN = fibNums.reduce( (total, cur) =>  total += cur);
            // push that value in fibNums
            fibNums.push(fibN);
            // and remove the first value, so we can two values again
            fibNums.shift();
            // and set the value of fibonacciNum to fibN
            fibonacciNum = fibN;
        }

        // return the fibonacci number
        return fibonacciNum;
    } else {
        // it doesnt work with any other values except where n is 0,1 or greater than 1
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
