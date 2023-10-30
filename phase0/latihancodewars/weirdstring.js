function toWeirdCase(string){
 
    const words = string.split(' ');
    const weirdWords = [];
    
    for(const word of words){
      let weirdWord=''
      for(let i = 0 ; i < word.length;i++){
        if(i%2==0){
          weirdWord+=word[i].toUpperCase()
        }else{
          weirdWord+=word[i].toLowerCase()
        }
      }
       weirdWords.push(weirdWord)
    }
    return weirdWords.join(' ')
 }
 
 
 console.log(toWeirdCase("String")) //"StRiNg"
 console.log(toWeirdCase("Weird string case")) //"WeIrD StRiNg CaSe"