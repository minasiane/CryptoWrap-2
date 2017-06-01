	// demonstrate  encrypt/decrypt with more flaire from node

	//  Globalvars	 
	var crypto = require('crypto'),
		algorithm = 'aes-256-gcm',
		password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY', 
		iv = '60iP0h6vJoEa',
	 	ex = encrypt("Tim and Emily Rule!")

	// outputs test text
	
	console.log("\n Encrypted = " + ex.content + "\n Decrypted = " + decrypt(ex));


	// FUNCTIONS

	function encrypt(text) {
		var cipher = crypto.createCipheriv(algorithm,password,iv)
		var encrypted = cipher.update(text,'utf8','hex')
		encrypted += cipher.final('hex');
		var tag = cipher.getAuthTag();
		return {
			content: encrypted,
			tag: tag
		};
	}
	 
	function decrypt(encrypted) {
		var decipher = crypto.createDecipheriv(algorithm,password,iv)
		decipher.setAuthTag(encrypted.tag);
		var dd = decipher.update(encrypted.content, 'hex', 'utf8')
		dd += decipher.final('utf8');
		return dd;
	}
	 
