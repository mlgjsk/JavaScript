/** * 
 *generate a random number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
Math.floor(Math.random() * (max - min + 1)) + min} ourMin 
 * 
 */

// Example
function ourRandomRange(ourMin, ourMax) {
	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {
	let result = 0;
	if (result < myMax) {
		return (result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);
	}
}

// Change these values to test your function
var myRandom = randomRange(5, 15);
