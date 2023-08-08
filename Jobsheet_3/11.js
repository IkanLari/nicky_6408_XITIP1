const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Masukkan kalimat pertama: ", (kalimat1) => {
    rl.question ("Masukkan kalimat kedua: ", (kalimat2) => {
        // Menggabungkan kalimati dan kalimat2 menggunakan method concat()
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan: ${kalimatGabungan}`);
        rl.close();
    });
});

// Hasil
// Masukkan kalimat pertama: Saya sangat suka sekali warna
// Masukkan kalimat kedua: biru
// Hasil penggabungan: Saya sangat suka sekali warna biru