/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/



//Operation
//Input dan output


//fungsi menghitung luas dengan menggunakan function declaration

//boleh tidak memiliki nilai balik


//tidak menggunakan nilai balik
//segi empat (sisi * sisi)
function hitungLuasSegiEmpat(sisi){
    //tidak ada nilai balik
    var  luas = sisi * sisi
    return luas
}


//Persegi panjang (panjang * lebar)
function hitungLuasPersegiPanjang (panjang,lebar){
    //tidak ada nilai balik
    var luas = panjang * lebar
    return luas
}

//menggunakan nilai balik 
//segi tiga (0.5 * alas * tinggi)
function hitungLuasSegiTiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi
    return luas
}


//lingkaran (3.14 * jari-jari ^ 2)
function hitungLuasLingkaran(jariJari){
    return 3.14 * jariJari ^ 2  
}
//fungsi menghitung keliling dengan menggunakan function expression

//segi empat (sisi + sisi + sisi + sisi)
var hitungKelilingSegiEmpat  = function(sisi){
    // return sisi + sisi + sisi + sisi
    return sisi * 4
}

//persegi panjang (2* (panjang + lebar))
var hitungKelilingPersegiPanjang = function(panjang,lebar){
    return 2 * (panjang + lebar)
}

//segi tiga (alas + tinggi + sisi miring)
var hitungKelilingSegiTiga = function(alas,tinggi, sisiMiring){
    return alas + tinggi + sisiMiring
}

//lingkaran (2*3.14*jari-jari)
var hitungKelilingLingkaran  = function(jariJari){
    return 2 * 3.14*jariJari
}

//input outputnya

//luas
//persegi ( 1 variable)
function luasPersegi(){
    var persegi = parseInt(prompt('Masukan sisi persegi : '))
    var luas = hitungLuasSegiEmpat(persegi)
    document.write('Luas Persegi adalah : ' + luas)
}
//persegi panjang (2 variable)
function luasPersegiPanjang(){
    var panjang = parseInt(prompt('Masukan panjang persegi : '))
    var lebar = parseInt(prompt('Masukan lebar persegi : '))
    var luas = hitungLuasPersegiPanjang(panjang,lebar)
    document.write('Luas Persegi Panjang adalah : ' + luas)
}

//segitiga (2 variable)
function luasSegitiga(){
    var alas = parseInt(prompt('Masukan Alas Segitiga : '))
    var tinggi = parseInt(prompt('Masukan Tinggi Segitiga : '))
    var luas = hitungLuasSegiTiga(alas,tinggi)
    document.write('Luas Segitiga adalah : ' + luas)
}

//lingkaran (1 variable)
function luasLingkaran(){
    var jariJari = parseInt(prompt('Masukan Jari- Jari Lingkaran : '))
    var luas = hitungLuasLingkaran(jariJari)
    document.write('Luas Lingkaran adalah : ' + luas)
}



//keliling 
//persegi (1 varible)
function kelilingPersegi(){
    var kotak = parseInt(prompt('Masukan sisi persegi : '))
    var keliling = hitungKelilingSegiEmpat(kotak)
    document.write('Keliling Persegi adalah : ' + keliling)
}
//persegi panjang ( 2 variable)
function kelilingPersegiPanjang(){
    var panjang = parseInt(prompt('Masukan panjang persegi : '))
    var lebar = parseInt(prompt('Masukan lebar persegi : '))
    var keliling = hitungKelilingPersegiPanjang(panjang,lebar)
    document.write('Keliling Persegi Panjang adalah : ' + keliling)
}
//segitiga (3 varible)
function kelilingSegitiga(){
    var alas = parseInt(prompt('Masukan Alas Segitiga : '))
    var tinggi = parseInt(prompt('Masukan Tinggi Segitiga : '))
    var sisiMiring = parseInt(prompt('Masukan Sisi Miring Segitiga : '))
    var keliling = hitungKelilingSegiTiga(alas,tinggi,sisiMiring)
    document.write('Luas Segitiga adalah : ' + keliling)
}
//lingkaran (1 varible)
function kelilingLingkaran(){
    var jariJari = parseInt(prompt('Masukan Jari- Jari Lingkaran : '))
    var keliling = hitungKelilingLingkaran(jariJari)
    document.write('Luas Lingkaran adalah : ' + keliling)
}

//Menu
var menu = prompt('Silahkan Pilih Menu yang Tersedia','1 - luas, 2- keliling')

if(menu==1){
    //mengoperasikan menu luas
    alert('Anda telah memilih menu luas')
    var menuLuas = prompt('Masukan bangun datar yang akan dihitung luasnya ','1 - Persegi, 2 - Persegi panjang, 3 - Segitiga, 4 - Lingkaran')
    if (menuLuas==1){
        //Luas persegi
        luasPersegi()
    }else if(menuLuas==2){
        //Luas Persegi panjang
        luasPersegiPanjang()
    }else if(menuLuas==3){
        //Luas segitiga
        luasSegitiga()
    }else if(menuLuas==4){
        //Luas Lingkaran
        luasLingkaran()
    }


} else if(menu == 2){
    //mengoperasikan menu keliling
    alert('Anda telah memilih menu keliling')
    var menuKeliling = prompt('Masukan bangun datar yang akan dihitung kelilingnya ','1 - Persegi, 2 - Persegi panjang, 3 - Segitiga, 4 - Lingkaran')
    if (menuKeliling==1){
        //Keliling persegi
        kelilingPersegi()
    }else if(menuKeliling==2){
        //Keliling Persegi panjang
        kelilingPersegiPanjang()
    }else if(menuKeliling==3){
        //Keliling segitiga
        kelilingSegitiga()
    }else if(menuKeliling==4){
        //Keliling Lingkaran
        kelilingLingkaran()
    }

}else{
    document.write('Menu yang anda pilih tidak valid')
}