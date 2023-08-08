const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Nama? ", (kalimat1) => {
    // Menggabungkan kalimati dan kalimat2 menggunakan method concat()
    console.log(`Welcome ${kalimat1}`);
        rl.close();
    });

// Hasil
// Nama? nicky
// Welcome nicky