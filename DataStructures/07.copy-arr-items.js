//Copy Array Items Using slice()
//Modify the function using slice() to extract information from the argument
//array and return a new array that contains the elements 'warm' and 'sunny'.

function forecast(arr) {
	return arr.slice(2, 4);
}

// do not change code below this line
console.log(forecast([ 'cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms' ]));
