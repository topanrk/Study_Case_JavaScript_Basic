/* //Soal 1
Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
- apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
- apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

var menu = prompt('Silahkan Pilih Menu yang Tersedia','1 - luas permukaan, 2- volume */

//pilihan menu
if(menu==1){
    //mengoperasikan menu luas
    alert('Anda telah memilih menu luas Permukaan')
   luasPermukaan()

} else if(menu == 2){
    //mengoperasikan menu volume
    alert('Anda telah memilih menu Volume')
    luasVolume()

}else{
    document.write('Menu yang anda pilih tidak valid')
}

//operasi 
function hitungLuasPermukaan (panjang,lebar,tinggi){
    var luas = 2 * (panjang*lebar) + 2 * (panjang*lebar) + 2 *(tinggi*lebar)
    return luas
}

function hitungVolume (panjang,lebar,tinggi){
    var volume = panjang*lebar*tinggi
    return volume
}

//input output
function luasPermukaan (){
    var panjang = parseInt(prompt('Masukan Panjang Permukaan Balok : '))
    var lebar = parseInt(prompt('Masukan Lebar Permukaan Balok : '))
    var tinggi = parseInt(prompt('Masukan Tinggi Permukaan Balok : '))
    var luas = hitungLuasPermukaan(panjang,lebar,tinggi)
    document.write('Luas Permukaan Balok adalah : ' + luas) 
}

function luasVolume (){
    var panjang = parseInt(prompt('Masukan Panjang Balok : '))
    var lebar = parseInt(prompt('Masukan Lebar Balok : '))
    var tinggi = parseInt(prompt('Masukan Tinggi Balok : '))
    var volume = hitungVolume(panjang,lebar,tinggi)
    document.write('Volume Balok adalah : ' + volume) 
}
