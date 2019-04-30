// Add Items to an Array with push() and unshift()
//add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
	arr.push(7, 'VIII', 9);
	arr.unshift('I', 2, 'three');
	return arr;
}

// do not change code below this line
console.log(mixedNumbers([ 'IV', 5, 'six' ]));
