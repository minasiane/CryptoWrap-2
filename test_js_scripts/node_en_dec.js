// modified example to test native node.js encrypt

// node.js encrypt with CTR

var crypto = require('crypto'),
	algorithm = 'aes-256-ctr',
	password = 'd6F3Efeq';

function encrypt(text) {
	var cipher = crypto.createCipher(algorithm,password)
	var crypted = cipher.update(text,'utf8','hex')
	crypted += cipher.final('hex');
	return crypted;
}

function decrypt(text) {
	var decipher = crypto.createDecipher(algorithm,password)
	var dec = decipher.update(text, 'hex', 'utf8')
	dec += decipher.final('utf8');
	return dec;
}

var tst = encrypt("test text")
// outputs test text
console.log("\n Encrypted = " + tst + "\n Decrypted = " + decrypt(tst));
