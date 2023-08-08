const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question ("Masukkan indeks awal: ", (startIndex) => {
        rl.question ("Masukkan indeks akhir: ", (endIndex) => {
            // Konversi nilai indeks ke tipe Number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // Gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
            const substringResult = kalimat.substring(startIndex, endIndex); console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}
            `);
            rl.close();
        });
    });
});

// Hasil
// Masukkan sebuah kalimat: Universitas Sudirman merupakan universitas yang terletak di kota Purwokerto
// Masukkan indeks awal: 3
// Masukkan indeks akhir: 10
// Hasil substring dari indeks 3 hingga 10: versita