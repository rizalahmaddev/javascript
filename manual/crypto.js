const crypto = require('crypto');

const rahasia = 'cryted pesan';

const hash = crypto.createHmac('sha256', rahasia)
					.update('lagi ngapain')
					.digest('hex');

console.log(hash);
