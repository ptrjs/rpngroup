/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array 
juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
    //code here 

    if(arr.length===0){
        return 'invalid input parameter'
    }

    let reversedWords = [];
    for (let i = arr.length-1; i >= 0 ; i--) {
        let word = arr[i]
        let reversedWord = ''
        
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord+=word[j]
          //  console.log(reversedWord);        
        }
        
        if(word.length%2===0){
            reversedWords.push(reversedWord)
        }else{
            let doubleRev =''
            for (let k = reversedWord.length - 1; k >= 0; k--) {
                doubleRev+=reversedWord[k]
              //  console.log(doubleRev);
            }
            reversedWords.push(doubleRev)
        }
        
      
        
    }
    return reversedWords
  
    
    
    
}



console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
 console.log(doubleReverse(['aku', 'sayang', 'kamu']));
 // [ 'umak', 'gnayas', 'aku' ]
 console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
 //[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
 console.log(doubleReverse([]))
 // invalid input parameter
