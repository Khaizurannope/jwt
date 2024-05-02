const jwt = require('jsonwebtoken');
const secretKey = 'pengenLiburan';

function createKegiatan(Jadwal) {
    
    const payload = {
       Jadwal : Jadwal
    };

    
    const token = jwt.sign(payload, secretKey);
    delete token.iat;

    return token;
}

const Jadwal = {
    shalat: "06:00",
    makan_bersama: "12:30",
    bermain_bersama: "16:00"
};


const magicToken = createKegiatan(Jadwal);
console.log("TOKEN UNTUK LIBURAN : ", magicToken);
