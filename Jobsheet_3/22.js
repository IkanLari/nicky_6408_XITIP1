const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question ("Masukkan indeks awal: ", (startIndex) => {
        rl.question ("Masukkan panjang substring: ", (length) => {
            // Konversi nilai indeks dan panjang ke tipe Number
            startIndex = Number(startIndex);
            length = Number(length);
            // Gunakan method substr untuk mengambil substring dari startIndex dengan panjang length
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
            rl.close();
        });
    });
});

// Hasil
// Masukkan sebuah kalimat: Halo, perkenalkan nama saya adalah Javascript
// Masukkan indeks awal: 8
// Masukkan panjang substring: 5
// Hasil substring dari indeks 8 dengan panjang 5: rkena