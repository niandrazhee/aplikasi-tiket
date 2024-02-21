alert("Selamat Datang di Aplikasi Tiket \nSilahkan Isi Identitas Anda!");

//Input nama
const nama = prompt("Masukkan nama:");

//Input umur
const umur = prompt("Masukkan umur:");

// Cek apakah umur lebih besar dari 13
if (umur > 13) {
    // Jika ya, pilih studio A, B, atau C
    const studio = prompt("Pilih studio (A, B, C):");

    //Pilihan studio
    if (studio === 'A') {
        alert("Tiket " + nama + ", Studio A, Umur " + umur);
    } else if (studio === 'B') {
        alert("Tiket " + nama + ", Studio B, Umur " + umur);
    } else if (studio === 'C') {
        alert("Tiket " + nama + ", Studio C, Umur " + umur);
    } else {
        alert("Pilihan studio tidak valid.");
    }
} else {
    // Jika tidak, tidak boleh masuk studio
    alert("Maaf, Anda tidak boleh masuk studio karena umur Anda masih dibawah umur 13 tahun.");
}
alert("Terima Kasih!");

