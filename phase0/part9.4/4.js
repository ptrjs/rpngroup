/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b 
yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, 
kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    // you can only write your code here!
     //deklarasi variabel untuk mendapatkan index x dan o
  let a = -1; //-1 kalau o ga ketemu dan > -1 kalau o ketemu pada array
  let b = -1;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      a = i
      //console.log("a"+a)
    } else if (num[i] === 'b') {
      b = i
      //console.log("b"+i)
    }

    
  }
  if(Math.abs(a-b)===4){
    return true
  }else{
    return false
  }

  
  
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
   console.log(checkAB('i am sick')); // false
   console.log(checkAB('you are boring')); // true
   console.log(checkAB('barbarian')); // true
   console.log(checkAB('bacon and meat')); // false
 
 // 0 1 2 3 4 5 6 7 8
 // b a r b a r i a n