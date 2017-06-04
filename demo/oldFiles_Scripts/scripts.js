	// demonstrate  encrypt/decrypt with more flaire from node
	var but1 = document.getElementByName("click");

	but1.addEventListener("click", doIt());

	function doIt({
	// Globalvars

	var crypto = require('crypto'),
		algorithm = 'aes-256-gcm',
		password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY', 
		iv = '60iP0h6vJoEa',
	 	ex = encrypt("Tim and Emily Rule!"),
	 	output = "\n Encrypted = " + ex.content + "\n Decrypted = " + decrypt(ex);

	 
	// outputs test text
	
	document.getElementById("output").innerHTML=output;


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
}
	
