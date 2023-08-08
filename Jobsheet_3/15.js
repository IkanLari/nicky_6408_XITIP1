const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question ("Masukkan kata yang ingin Anda cari: ", (kataCari) => {
        // Gunakan method indexOf untuk mencari kataCari dalam kalimat
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks: ${indeksKata}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});

// Hasil
// Masukkan sebuah kalimat: Banu merupakan seorang murid di sekolah SMK di Jakarta dan jurusan dia adalah RPL
// Masukkan kata yang ingin Anda cari: jurusan
// Kata 'jurusan' ditemukan pada indeks: 59