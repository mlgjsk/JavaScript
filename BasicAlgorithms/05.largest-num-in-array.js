/*Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

function largestOfFour(arr) {
	var results = [];

	for (var i = 0; i < arr.length; i++) {
		var largestNumber = arr[i][0];

		for (var j = 1; j < arr[i].length; j++) {
			if (arr[i][j] > largestNumber) {
				largestNumber = arr[i][j];
			}
		}

		results[i] = largestNumber;
	}

	return results;
}

largestOfFour([ [ 4, 5, 1, 3 ], [ 13, 27, 18, 26 ], [ 32, 35, 37, 39 ], [ 1000, 1001, 857, 1 ] ]);

/**
 * INTERMEDIATE SOLUTION
 * 
 * function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}


	ADVANCED SOLUTION

	function largestOfFour(arr) {
  		return arr.map(Function.apply.bind(Math.max, null));
	}
 */
