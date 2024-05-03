const jwt = require('jsonwebtoken');
const scrtKey = 'liburan';

function createToken(jadwalShalat, jadwalMakan, jadwalBermain) {
    const data = { jadwalShalat, jadwalMakan, jadwalBermain };
    return jwt.sign(data, scrtKey, { expiresIn: '24h' });
};

function verifyToken(token) {
    try {
        const decode = jwt.verify(token, scrtKey);
        delete decode.iat;
        return decode;
    } catch (err) {
        console.error('Error Token : ', err.message);
        return null;
    }
};

const jadwalArray = [{
        id: 1,
        jadwalShalat: ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'],
        jadwalMakan: ['Sarapan', 'Makan Siang', 'Makan Malam'],
        jadwalBermain: ['Bermain Game', 'Bermain Bersama Keluarga', 'Bermain di Taman']
    },
    {
        id: 2,
        jadwalShalat: ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'],
        jadwalMakan: ['Sarapan', 'Makan Siang', 'Makan Malam'],
        jadwalBermain: ['Bermain Game', 'Bermain Bersama Keluarga', 'Bermain di Taman']
    },
    {
        id: 3,
        jadwalShalat: ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'],
        jadwalMakan: ['Sarapan', 'Makan Siang', 'Makan Malam'],
        jadwalBermain: ['Bermain Game', 'Bermain Bersama Keluarga', 'Bermain di Taman']
    },
    {
        id: 4,
        jadwalShalat: ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'],
        jadwalMakan: ['Sarapan', 'Makan Siang', 'Makan Malam'],
        jadwalBermain: ['Bermain Game', 'Bermain Bersama Keluarga', 'Bermain di Taman']
    },
    {
        id: 5,
        jadwalShalat: ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'],
        jadwalMakan: ['Sarapan', 'Makan Siang', 'Makan Malam'],
        jadwalBermain: ['Bermain Game', 'Bermain Bersama Keluarga', 'Bermain di Taman']
    }
];

const tokenArr = [];
jadwalArray.forEach(jadwal => {
    const token = createToken(
        jadwal.jadwalShalat,
        jadwal.jadwalMakan,
        jadwal.jadwalBermain
    );
    tokenArr.push(token);
});

tokenArr.forEach((token, index) => {
    console.log(`Token jadwal kegiatan untuk libur ke-${index + 1}:`, token);
    const jadwalInfo = verifyToken(token);
    if (jadwalInfo) {
        console.log("Jadwal kegiatan untuk libur: ", jadwalInfo);
        console.log("Selamat token valid!");
    } else {
        console.log("Token tidak valid. Silakan periksa kembali atau hubungi penyelenggara.");
    }
});