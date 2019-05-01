/** * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
 * The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */
function getIndexToIns(arr, num) {
	arr.push(num);
	arr.sort(function(a, b) {
		return a - b;
	});
	return arr.indexOf(num);
}

getIndexToIns([ 40, 60 ], 50);

// 2nd Solution
/**
 * function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([1,3,4],2);
 */

//3rd Solution

/**
  * function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
        var times = arr.length; // runs the for loop once for each thing in the array
        var count = 0; 
        for (var i=0;i<times;i++){
            if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
        return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);
  */
