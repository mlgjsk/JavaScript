//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
	var prevNumber = 0;
	var currNumber = 1;
	var result = 0;
	while (currNumber <= num) {
		if (currNumber % 2 !== 0) {
			result += currNumber;
		}
		currNumber += prevNumber;
		prevNumber = currNumber - prevNumber;
	}
	return result;
}
sumFibs(4);
