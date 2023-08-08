const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    const kalimatUpperCase = kalimat.toUpperCase();
    // Gunakan method toUpperCase untuk mengubah kalimat menjadi huruf besar
    console.log(`Kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});

// Hasil
// Masukkan sebuah kalimat: Data Analyst merupakan pekerjaan yang dibutuhkan beberapa perusahaan
// Kalimat dalam huruf besar: DATA ANALYST MERUPAKAN PEKERJAAN YANG DIBUTUHKAN BEBERAPA PERUSAHAAN