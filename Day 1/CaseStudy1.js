
var bil1 = parseInt(prompt('Masukkan Bilangan Pertama '))
var bil2 = parseInt(prompt('Masukkan Bilangan Pertama '))
 
function tambah (){
    document.write('Hasil penjumlahan kedua bilangan adalah : ' +(bil1 + bil2)+ '<br>')
}

function kurang (){
    document.write('Hasil pengurangan kedua bilangan adalah : ' +(bil1 - bil2)+ '<br>')
}

var hasilPerkalian = function(x,y){
    return x * y
}

var hasilBagi = function(x,y){
    return x / y
}

function sisaHasilBagi(x,y){
    return x%y
}

tambah()
kurang()
document.write('Hasil pekalian kedua bilangan adalah : ' +hasilPerkalian(bil1,bil2)+ '<br>')
document.write('Hasil pembagian kedua bilangan adalah : ' +hasilBagi(bil1,bil2)+ '<br>')
document.write('Hasil modulus kedua bilangan adalah : ' +sisaHasilBagi(bil1,bil2)+ '<br>')
//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.