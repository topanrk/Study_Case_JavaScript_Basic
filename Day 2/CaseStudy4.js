/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/

function beratBadanPria() {
    bBP = (tinggiPria-100) - ((tinggiPria-100) * 10/100)
    return bBP
}

function beratBadanWanita() {
    bBW = (tinggiWanita-100) - ((tinggiWanita-100) * 15/100)
    return bBW
}

tinggiPria = prompt('Masukan Tinggi Pria ')
tinggiWanita = prompt('Masukan Tinggi Wanita ')
document.write('Berat badan ideal pria untuk tinggi '+tinggiPria+' sentimeter adalah ' +beratBadanPria()+ ' kilogram' +' <br>')
document.write('Berat badan ideal wanita untuk tinggi '+tinggiWanita+' sentimeter adalah ' +beratBadanWanita()+ ' kilogram' +' <br>')