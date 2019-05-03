//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	let flat = [].concat(...arr);
	return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ]);

/**2nd solution:
 * function steamrollArray(arr) {
 * var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
 */
