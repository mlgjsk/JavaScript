//The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
/**
 * //Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3


// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13


Fill in the body of the add function so it uses currying to add parameters x, y, and z.

 */

function add(x) {
	return function(y) {
		return function(z) {
			return x + y + z;
		};
	};
}
add(10)(20)(30);
