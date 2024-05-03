const jwt = require('jsonwebtoken');
const secretKey = 'school';

function createToken(id, name, Gender, address, planHealing) {
    const data = {
        id,
        name,
        Gender,
        address, 
        planHealing 
    };
    return jwt.sign(data, secretKey);
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        return null;
    }
}

const arrSiswa = [
    {
        id: 1,
        name: "Yopi",
        Gender: "Laki-laki",
        address: "Bogor",
        planHealing: "Menara Eiffel"
    },
    {
        id: 2,
        name: "Raqi",
        Gender: "Laki-laki",
        address: "Java",
        planHealing: "Curug"
    },
    {
        id: 3,
        name: "Feni",
        Gender: "Perempuan",
        address: "Tanser",
        planHealing: "Mahameru Mountain"
    },
    {
        id: 4,
        name: "Adel",
        Gender: "Perempuan",
        address: "Jakarta",
        planHealing: "Bromo"
    },
    {
        id: 5,
        name: "Zaid",
        Gender: "Laki-laki",
        address: "Tanser",
        planHealing: "Blue Beach"
    }
]

// Membuat token, melakukan verifikasi, dan mencetak hasil dalam satu panggilan
arrSiswa.forEach(siswa => {
    const token = createToken(
        siswa.id, 
        siswa.name, 
        siswa.Gender, 
        siswa.address, 
        siswa.planHealing
    );

    console.log(`Siswa dengan id ${siswa.id} menggunakan token: ${token}`);

    const decodedToken = verifyToken(token);
    if (decodedToken) {
        console.log("Token is valid. Lets GO!");
        delete decodedToken.iat;
        console.log(decodedToken);
    } else {
        console.log("Token tidak valid.");
    }
});
