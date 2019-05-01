//Return the length of the longest word in the provided sentence.
//Response should be a number.

function findLongestWordLength(str) {
	var words = str.split(' ');
	var maxLength = 0;

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

/**2ND SOLUTION
 * 
 * function findLongestWordLength(s) {
  		return s.split(' ')
    	.reduce(function(x, y) {
      		return Math.max(x, y.length)
    }, 0);
}
 */
