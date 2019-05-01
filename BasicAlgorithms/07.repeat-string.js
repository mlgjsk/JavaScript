//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	// repeat after me
	let str2 = '';
	for (let i = 0; i < num; i++) {
		str2 += str;
	}
	return str2;
}

repeatStringNumTimes('abc', 3);
