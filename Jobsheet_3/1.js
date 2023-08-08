const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    // Contoh property length
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});

// Hasil
// Masukkan sebuah kalimat: Budi adalah seorang siswa jurusan RPL yang tinggal didaerah Bekasi
// Panjang kalimat: 66