// const add = function(a, b) {
//   	return a + b;
// };
const add = (a, b) => a + b;



// const subtract = function(a, b) {
// 	return a - b;
// };
const subtract = (a, b) => a - b;



//----------- sum exercise

// const sum = function(arr) {
// 	// return arr.reduce( (total, cur) => {
// 	// 	return total += cur;
// 	// }, 0)
// 	return arr.reduce( (total, cur) => (total += cur), 0);
// };

// whole code block above can be written like below using arrow function
const sum = arr => arr.reduce( (total, cur) => (total += cur), 0);
//----------- sum exercise



//----------- multiply exercise

// const multiply = function(arr) {
// 	return arr.reduce( (sum, cur) => {
// 		return sum * cur;
// 	})
// };

// shorter way with arrow functions
const multiply = arr => arr.reduce( (sum, cur) => (sum *= cur));

//----------- multiply exercise



const power = function(n1, n2) {
	return Math.pow(n1,n2);
};



const factorial = function(n) {
	let numbers = [];
	for(let i = n; i >= 1; i--){
			numbers.push(i);
	}

	// no need for these two lines below, just return it
	// const total = numbers.reduce( (acc, cur) => (acc * cur), 1);
	// return total;
	return numbers.reduce( (acc, cur) => (acc * cur), 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
