function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    text =  text.toLowerCase()
    
    let res = []
    
    for(let i = 0 ; i < text.length; i++){
      char = text[i]
      if(alphabet.includes(char)){
        res.push(alphabet.indexOf(char)+1)
      }
    }
    return res
    
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))