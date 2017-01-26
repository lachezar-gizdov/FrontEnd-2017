/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes() {
	return function (numbers) {
		let result = [],
			counter = 0;
		numbers[0] = +numbers[0];
		numbers[1] = +numbers[1];

		if (numbers.length !== 2 || isNaN(numbers[0]) || isNaN(numbers[1])) {
			throw 'Error';
		}
		for (let i = numbers[0]; i <= numbers[1]; i += 1) {
			for (let j = 1; j <= i; j += 1) {
				if (i % j === 0) {
					counter += 1;
				}
			}
			if (counter > 1 && counter <= 2) {
				result.push(i);
			}
			counter = 0;
		}
		return result;
	};
}

module.exports = findPrimes;
