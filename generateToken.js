const jwt = require('jsonwebtoken');
const secretKey = 'sekolah';
const payload = {userid : 2702, username : "Khaizuran", kelas : "XI"}

const generateToken = jwt.sign(payload, secretKey);
console.log(generateToken);