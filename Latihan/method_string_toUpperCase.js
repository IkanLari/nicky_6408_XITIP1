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