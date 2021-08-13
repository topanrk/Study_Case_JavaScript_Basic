//Soal 2
//Terdapat 5 data nama berikut ini: 
//    1. Budi 
//    2. Adi 
//    3. Gunawan 
//    4. Joko 
//    5. Bambang 
//Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan 
//output "Boleh masuk!" dan selain nama 
//di atas akan mengeluarkan output "Tidak boleh masuk!". 

var nama = prompt('Ketik nama anda : ','huruf awal harus kapital')

if (nama == 'Budi'){
    document.write('Boleh masuk!')
} else if (nama == 'Adi'){
    document.write('Boleh masuk!')
} else if (nama == 'Gunawan'){
    document.write('Boleh masuk!')
} else if (nama == 'Joko'){
    document.write('Boleh masuk!')
} else if (nama == 'Bambang'){
    document.write('Boleh masuk!')
} else {
    document.write('Tidak boleh masuk!')
}
