const jwt = require('jsonwebtoken');
const secretKey = 'pengenLiburan';

function createMagicToken(nama, alamat, nomorKontak) {
    
    const payload = {
        nama: nama,
        alamat: alamat,
        nomorKontak: nomorKontak,
    };

    
    const token = jwt.sign(payload, secretKey);
    delete token.iat;

    return token;
}


const nama = "KHAIZURANOPE";
const alamat = "Atlantis City";
const nomorKontak = "08291938423";

const magicToken = createMagicToken(nama, alamat, nomorKontak);
console.log("TOKEN UNTUK LIBURAN : ", magicToken);