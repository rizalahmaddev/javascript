
// Nodejs encryption with CTR
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
//public key
const key = crypto.randomBytes(32);
//private key
const iv = crypto.randomBytes(16);

// buat fungsi encryption 
function encrypt(pesan) {
	let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
	let encrypted = cipher.update(pesan);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}
// buat fungsi decryption
function decrypt(pesan) {
	let iv = Buffer.from(pesan.iv, 'hex');
	let encryptedText = Buffer.from(pesan.encryptedData, 'hex');
	let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
}

// buat pesan
var pesan = encrypt("lagi ngapain");
// tampilkan pesan yang encryption
console.log(pesan);
// tampilkan pesan yang di decryption 
console.log(decrypt(pesan));
