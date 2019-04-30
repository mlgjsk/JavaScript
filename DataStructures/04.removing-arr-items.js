//Remove Items from an Array with pop() and shift()
//using pop() and shift(), remove the first and last elements of the
//argument array, and assign the removed elements to their corresponding
//variables, so that the returned array contains their values.

function popShift(arr) {
	let popped = arr.pop();
	let shifted = arr.shift();
	return [ shifted, popped ];
}

console.log(popShift([ 'challenge', 'is', 'not', 'complete' ]));
