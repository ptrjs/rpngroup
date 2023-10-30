function isPangram(string){
    //...
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let stringToLower = string.toLowerCase()
    let regex = /[ .]/g
    let stringSplit = stringToLower.replace(regex)
    
    for(let i = 0 ; i<alphabet.length;i++){
      if(stringSplit.indexOf(alphabet[i]) ===-1){
        return false
      }
      
    }
    return true  
    
  }
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog."))
  console.log(isPangram("This is not a pangram."))