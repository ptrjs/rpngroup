function findOdd(A) {
    //happy coding!
    let obj = {}
    let arr = A
    for(let i = 0; i < arr.length ; i++){
    
        
        if(!obj[arr[i]]){
          obj[arr[i]]=[]
        }
        
        obj[arr[i]].push(arr[i])
    }
    
    let res = Object.values(obj)
    
    for(let j = 0 ; j<res.length;j++){
      if(res[j].length%2!=0){
        return res[j][0]
        
        break
      }
    }
  }
  
      console.log(findOdd([7])) // 7);
      console.log(findOdd([0])) // 0);
      console.log(findOdd([1,1,2])) // 2);
      console.log(findOdd([0,1,0,1,0])) // 0);
  
      console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) // 4);