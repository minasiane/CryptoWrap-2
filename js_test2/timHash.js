var hash1 = require('crypto')
			.createHash('md5')
			.update('Tim & Emily Rule', 'utf-8')
			.digest('utf-8'),

	hash2 = require('crypto')
			.createHash('md5')
			.update('Tim & Emily Rule', 'utf-8')
			.digest('hex'),

	hash3 = require('crypto')
			.createHash('sha1')
			.update('Tim & Emily Rule', 'utf-8')
			.digest('utf-8'),

	hash4 = require('crypto')
			.createHash('sha1')
			.update('Tim & Emily Rule', 'utf-8')
			.digest('hex'),

	hash5 = require('crypto')
			.createHash('sha256')
			.update('Tim & Emily Rule', 'utf-8')
			.digest('utf-8'),

	hash6 = require('crypto')
			.createHash('sha256')
			.update('Tim & Emily Rule', 'utf-8')
			.digest('hex');

	
	console.log("\n   Unhashed = Tim & Emily Rule" +
				"\n   MD5-utf8 = " + hash1 + 
				"\n   MD5-hex = " + hash2 +  
				"\n   SHA1-utf8 = " + hash3 +
				"\n   SHA1-hex = " + hash4 +
				"\n   SHA256-utf8 = " + hash5 +
				"\n   SHA256-hex = " + hash6);
