//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
/**ASCENDING ORDER
 * 
 * function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

REVERSE ORDER
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
 */

//ALPHABETICAL ORDER

function alphabeticalOrder(arr) {
	return arr.sort(function(a, b) {
		return a > b;
	});
}
alphabeticalOrder([ 'a', 'd', 'c', 'a', 'z', 'g' ]);
