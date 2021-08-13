function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */

        if (nilai > 80 && nilai <=100){
            return 'A'
        } else if(nilai> 60 && nilai <=80){
            return 'B'
        } else if(nilai> 40 && nilai <=60){
            return 'C'
        } else if(nilai > 20 && nilai <=40){
            return 'D'
        } else if(nilai >= 0 && nilai <=20){
                return 'E'
        } else {
            return 'Nilai tidak valid'
        }
}

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

var hasil = nilaiPeserta(5)
var inputan = prompt('Masukan nilai akhir : ')
document.write(hasil + '<br>')
document.write(nilaiPeserta(60.5) + '<br>')
document.write(nilaiPeserta(39.5) + '<br>')
document.write(nilaiPeserta(50) + '<br>')
document.write(nilaiPeserta(101) + '<br>')
document.write(nilaiPeserta(inputan) + '<br>')