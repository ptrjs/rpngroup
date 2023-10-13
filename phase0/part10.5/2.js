
/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf 
setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini //0v   1    2    3    4v   5    6    7   8v    9   10   11   12   13   14v   15   16   17   18   19  20v   21   22   23   24   25
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let alphabetCapital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let changedVocal = ''
    let word = ''
    
    for (let i = 0; i < str.length; i++) {
        
        let currChar = str[i]
        let isVocal = 'aeiou'.includes(currChar)
        let isVocalCap = 'AEIOU'.includes(currChar)
        if(isVocal){
            let currIndex = alphabet.indexOf(currChar)
            let nextIndex = currIndex+1
            word+=alphabet[nextIndex]
        }else if(isVocalCap){
            let currIndex = alphabetCapital.indexOf(currChar)
            let nextIndex = currIndex+1
            word+=alphabetCapital[nextIndex]
        }else{
            word+=currChar
        }
        
    }
   return word


  }
  
  function reverseWord (str) {
    //code di sini
    
    let changeWord = changeVocals(str)
    let revWord = ''
    for (let i = changeWord.length-1; i >= 0; i--) {
        revWord+=changeWord[i]
        
    }
    return revWord
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let revWord = reverseWord(str)
    let morphWord = ''
    for (let i = 0; i < revWord.length; i++) {
       
  
        if(revWord[i] === revWord[i].toUpperCase()){

            morphWord+=revWord[i].toLowerCase()

        }else if(revWord[i] !== revWord[i].toUpperCase()){
           
            morphWord+=revWord[i].toUpperCase()
            
       }
    }
    return morphWord
  }
  
  function removeSpaces (str) {
    //code di sini
    let setLowUp = setLowerUpperCase(str)
    let space = setLowUp.split(' ').join('')
    return space
    
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let res = removeSpaces(name)
    return res
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  