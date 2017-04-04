/*
	Script to show usage of s4 module
	Author: Emily Minasian
*/

// load the s4 module
var s4 = require('s4');

var config = {
				key:'PUT_AWS_KEY_HERE',
				secret:'PUT_AWS_SECRET_KEY_HERE',
				bucket:'PUT_BUCKET_NAME_HERE',
				folder:'PUT_DIRECTORY_NAME_HERE'
			};

var photos = s4.create(config);
var pic    = require('path').join(__dirname, 'me.jpeg');

photos.save(pic, function(err, key) {
	if (err) {
		console.log("There was some error");
	}
	else {
		console.log("File uploaded");
		console.log('key to pic: ' + key);
	}
});
npm install
node testS4.js
