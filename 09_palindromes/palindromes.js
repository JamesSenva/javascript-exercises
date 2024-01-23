const palindromes = function (str) {
    const originalStr = str.replace(/[\.,?!\s]/g, "").toLowerCase();
	const reversedStr = str.split('').reverse().join('').replace(/[\.,?!\s]/g, "").toLowerCase();
    return (originalStr === reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
