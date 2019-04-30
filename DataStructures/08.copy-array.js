//Copy an Array with the Spread Operator
//Modify the function using spread syntax so that it works correctly

function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		newArr.push([ ...arr ]);

		num--;
	}
	return newArr;
}

// change code here to test different cases:
console.log(copyMachine([ true, false, true ], 2));
