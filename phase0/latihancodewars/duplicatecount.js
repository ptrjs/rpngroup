function duplicateCount(text){
    let textConvert = text.toLowerCase()
    let obj = {}
    
    for(let i = 0; i < textConvert.length ; i++){
      
          
          if(!obj[textConvert[i]]){
            obj[textConvert[i]]=[]
          }
          
          obj[textConvert[i]].push(textConvert[i])
      }
      
      let res = Object.values(obj)
      
    let endRes = []  
    for(let i = 0 ; i < res.length; i++){
      if(res[i].length>1){
        endRes.push(res[i])
      }
    }  
    
    return endRes.length
  }
  
  console.log(duplicateCount("")) //0
  console.log(duplicateCount("abcde")) //0
  console.log(duplicateCount("aabbcde")) //2
   console.log(duplicateCount("aabBcde")) //2
   console.log(duplicateCount("Indivisibility")) //1
   console.log(duplicateCount("Indivisibilities")) //2
  