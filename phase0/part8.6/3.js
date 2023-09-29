
//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let range = 0 
    let arrRange = []
    for(let i = 0 ; i < arr.length-1; i++){
        range = arr[i+1]-arr[i]
        arrRange.push(range)
    
    }
 
    return (
        arrRange.filter(element => {
            return element === arrRange[0]
        }).length === arrRange.length
    )
  }
  
  // TEST CASES
   console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
   console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
   console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
   console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
   console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  
  