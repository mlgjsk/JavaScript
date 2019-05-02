/**
 * JavaScript offers the splice method , which takes arguments for the index of where to start removing items, 
 * then the number of items to remove. 
 * If the second argument is not provided, the default is to remove items through the end. 
 * However, the splice method mutates the original array it is called on.
 *   */

function nonMutatingSplice(cities) {
	return cities.slice(0, 3);
}
var inputCities = [ 'Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin' ];
nonMutatingSplice(inputCities);
