//Combine Arrays with the Spread Operator
//We have defined a function spreadOut that returns the variable sentence,
//modify the function using the spread operator so that it returns the
//array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
	let fragment = [ 'to', 'code' ];
	let sentence = [ 'learning', ...fragment, 'is', 'fun' ];
	return sentence;
}

// do not change code below this line
console.log(spreadOut());
