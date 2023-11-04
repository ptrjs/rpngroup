
/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]          2  3   4   2   6     1   5    5
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']
                  3   4    4    4   3    4    5    3   4    2
input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    //code here
    let regex = /[a-z,A-Z]+/g
    let cleanWords = words.match(regex)

    let sum = 0 
    for (let i = 0; i < cleanWords.length; i++) {
        sum+=cleanWords[i].length
        
        
    }
    let avg =  customRound(sum/cleanWords.length)
  //  console.log(avg);
    let avgLengthWord = []
    for (let i = 0; i < cleanWords.length; i++) {
        if(cleanWords[i].length===avg){
            avgLengthWord.push(cleanWords[i])
        }
        
    } 
    return avgLengthWord
    
  }

 function customRound(num) {
    if (num - Math.floor(num) <= 0.5) {
        return Math.floor(num);
    } else {
        return Math.ceil(num);
    }
 }
  
  console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
  console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
  console.log(averageLengthWord('I am diligent')); // []