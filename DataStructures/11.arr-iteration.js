//Iterate Through All an Array's Items Using For Loops
//Modify the function, using a for loop, to return a filtered version of the
//passed array such that any array nested within arr containing elem has been
//removed.

function filteredArray(arr, elem) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) == -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// change code here to test different cases:
console.log(filteredArray([ [ 3, 2, 3 ], [ 1, 6, 3 ], [ 3, 13, 26 ], [ 19, 3, 9 ] ], 3));
