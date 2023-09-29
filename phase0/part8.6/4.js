
function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let range = 0 
    let arrRange = []
    for(let i = 0 ; i < arr.length-1; i++){
        range = arr[i+1]/arr[i]
        arrRange.push(range)
    
    }

    return (
        arrRange.filter(element => {
            return element === arrRange[0]
        }).length === arrRange.length
    )
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false