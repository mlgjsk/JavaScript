//Modify an Object Nested Within an Object
/*You can modify properties on this nested object in the same way you modified 
properties in the last challenge. Set the value of the online key to 45.
*/

let userActivity = {
	id: 23894201352,
	date: 'January 1, 2017',
	data: {
		totalUsers: 51,
		online: 42
	}
};

userActivity.data['online'] = 45;

console.log(userActivity);
