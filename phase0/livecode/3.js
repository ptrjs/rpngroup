/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text){
    //...
    
    let textToLow = text.toLowerCase()
    let obj = {}
    
    
    for (let i = 0; i < textToLow.length; i++) {
       if (!obj[textToLow[i]]) {
        obj[textToLow[i]] = []
       }

       obj[textToLow[i]].push(textToLow[i])  

      
        
    }
    let res = Object.values(obj)
    
    let count = 0
    for (let i = 0; i < res.length; i++) {
        if (res[i].length > 1) {
            count++
            //console.log(res[i].length);
        }
        
    }
    return count

  }
  
  console.log(duplicateCount("")) //0
  console.log(duplicateCount("abcde")) //0
  console.log(duplicateCount("aabbcde")) //2
  console.log(duplicateCount("aabBcde")) //2
  console.log(duplicateCount("Indivisibility")) //1
  console.log(duplicateCount("Indivisibilities")) //2
  console.log(duplicateCount("abcabcdABcefGhg")) //4