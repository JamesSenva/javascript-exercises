const findTheOldest = function(people) {

    const oldest = people.reduce((oldOne, curOne) => {
        
        // check if the person has `yearOfDeath` property
		const hasDeathDate = oldOne.hasOwnProperty('yearOfDeath');

        // get the current year
		const currentYear = new Date().getFullYear();
        
        // ages of oldOne and curOne
		let last = oldOne.yearOfDeath - oldOne.yearOfBirth;
		let cur = curOne.yearOfDeath - curOne.yearOfBirth;

        // get the age if the person doesnt have `yearOfDeath` property
		let currentAge = currentYear - oldOne.yearOfBirth;

        // if hasDeathDate is false, update the value of last to currentAge
		!hasDeathDate ? last = currentAge : last;

        // if the age of oldOne > curOne, return the oldOne
		if (last > cur) return oldOne;
		return curOne;

	});

	return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
