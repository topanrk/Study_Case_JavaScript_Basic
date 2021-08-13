/* 
Buatlah sebuah fungsi dengan ketetuan  
1. Jika user menginputkan "mentor" maka mencetak isi array [Akhmad, Alif, Andika, Jojo] 
2. Jika user menginputkan "ta" maka mencetak isi array [Adib, Valen, Vista] 
3. Jika user menginputkan "Admin" maka mencetak isi array [Aura, Cahya]
 */

/* var menu = prompt('Inputkan sebuah kata','mentor, ta, admin')
 if(menu=='mentor'){
     namaMentor()
 } else if (menu=='ta'){
     namaTa()
 } else if (menu=='Admin'){
    namaAdmin()
 } else {
    document.write('Input anda tidak valid')
 }

 function namaMentor (){
     var mentor = [Akhmad, Alif, Andika, Jojo];
     document.write('Nama Mentor :' +mentor)
 }

 function namaTa (){
    var ta = [Adib, Valen, Vista];
    document.write('Nama TA :' +ta)
}

function namaAdmin (){
    var admin = [Aura, Cahya];
    document.write('Nama Admin :' +admin)
} */

var input = parseInt(prompt('Pilih  angka :','1. mentor, 2. TA, 3. admin'));

function study(){
    if(input==1){
        var mentor1=['Akhmad','Alif','Andika','Jojo'];
        document.write('Mentor Dojobox adalah : ',mentor1);
    }else if(input==2){
        var lisTa=['Adib','Valen','Vista'];
        document.write('TA Dojobox adalah ',listTa);
    }else if(input==3){
        var admin1=['Aura','Cahaya'];
        document.write('Admin Dojobox adalah ',admin1);
    }else {
        document.write('Diluar konteks')
    }

}

study();





