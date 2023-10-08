//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    
    word = []
    for(let i = 0 ; i < kalimat.length; i++){
       // console.log(kalimat[i])
       if(kalimat[i]===kalimat[i].toUpperCase()){
            
            word.push(kalimat[i].toLowerCase())
       }else if (kalimat[i]!==kalimat[i].toUpperCase()){
           
            word.push(kalimat[i].toUpperCase())
            
       }
       
    }

    let word2 =''
    for(let i = 0 ; i < word.length; i++){
        word2+=word[i]
    }
    return(word2)
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"