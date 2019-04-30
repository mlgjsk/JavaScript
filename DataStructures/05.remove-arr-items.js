//Remove Items Using splice()
//Modify the function, using splice(), so that it returns a value of 10.

function sumOfTen(arr) {
	arr.splice(2, 2);
	return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([ 2, 5, 1, 5, 2, 1 ]));
