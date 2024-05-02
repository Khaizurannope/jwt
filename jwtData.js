const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma';

function createToken(id, name, classes, address, hobby) {
    const data = {
        id,
        name,
        classes,
        address, 
        hobby 
    };
    return jwt.sign(data, secretKey);
}

function verify (token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) {
        return null;
    }
}

const siswa = {
    id: 1,
    name: "dhiaraqi",
    classes: "XI",
    address: "Atlantis City",
    hobby: "Sleep"
}

const token = createToken(
    siswa.id,
    siswa.name,
    siswa.classes,
    siswa.address,
    siswa.hobby
)

console.log('token', token)

//verifikasi token siswa

const decodedSiswa = verify(token);
console.log('decodedSiswa: ', decodedSiswa);