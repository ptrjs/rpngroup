
/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
    //code here
    let lower = sentences.toLowerCase()
    let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    
    if(sentences.length===0){
        return 0 
    }

    let firstChar = lower[0]
    let restChar = lower.slice(1)
    let count = 0
    
    for (let i = 0; i < consonants.length; i++) {
        if(consonants[i]===firstChar){
            count ++
        }
        
    }
    return count + consonantCounterRecursive(restChar)
    
  }
  
  console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
  console.log(consonantCounterRecursive('AziZy')) // 3
  console.log(consonantCounterRecursive('awt6an')) // 3
  