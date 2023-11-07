/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
    //code here
    if(str.length===0){
      return ''
    }

   // let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o', 'p','q','r','s','t','u' , 'v','w','x','y','z', '0', '1','2','3','4','5','6','7','8','9']

    let firstChar = str[0]
    let restChar = str.slice(1)
    
    if ((firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= '0' && firstChar <= '9')) {
      return firstChar + hapusSimbolRec(restChar);
    } else {
      return hapusSimbolRec(restChar);
    }
    // for (let i = 0; i < alphabet.length; i++) {
    //   if(alphabet[i]===firstChar){
        
    //     return firstChar +hapusSimbolRec(restChar)
    //   }
    //   else{
    //     return hapusSimbolRec(restChar)
    //   }
      
    // }

   
  }
  
  console.log(hapusSimbolRec('test4@aa')); //test4aa
  console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbolRec('ma@#k!an~')); // makan
  console.log(hapusSimbolRec('coding')); // coding
  console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
  
  
  