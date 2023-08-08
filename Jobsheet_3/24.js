const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question ("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) => {
            // Konversi nilai indeks ke tipe Number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // Gunakan method slice untuk mengambil substring dari startIndex hingga endIndex
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });
});

// Hasil
// Masukkan sebuah kalimat: Bahasa yang digunakan untuk membuat aplikasi mobile adalah Kotlin dan Javascript
// Masukkan indeks awal: 7
// Masukkan indeks akhir: 15
// Hasil slice dari indeks 7 hingga 15: yang dig