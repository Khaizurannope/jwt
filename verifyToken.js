const jwt = require('jsonwebtoken');
const secretKey = 'sekolah';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI3MDIsInVzZXJuYW1lIjoiS2hhaXp1cmFuIiwia2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMzA4Nn0.HEJXJ3wq3PLyzKhiHb7-N-Mi9VHhvQQIMMkLhvEj2T0';

jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Token is valid');
        delete decoded.iat;
        console.log(decoded);
    }
})