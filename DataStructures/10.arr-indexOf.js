//Check For The Presence of an Element With indexOf()
//Modify the function using indexOf() so that it returns true if the passed element exists on the array,
//and false if it does not.

function quickCheck(arr, elem) {
	if (arr.indexOf(elem) > -1) {
		return true;
	} else {
		return false;
	}
}

// change code here to test different cases:
console.log(quickCheck([ 'squash', 'onions', 'shallots' ], 'mushrooms'));
