// the global Array
var s = [ 23, 65, 98, 5 ];

Array.prototype.myFilter = function(callback) {
	var newArray = [];

	this.forEach(function(x) {
		if (callback(x) == true) {
			newArray.push(x);
		}
	});

	return newArray;
};

var new_s = s.myFilter(function(item) {
	return item % 2 === 1;
});
