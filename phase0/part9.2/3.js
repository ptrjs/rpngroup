function cariMedian(arr) {
    // you can only write your code here!

   let sort = arr.sort( function(a, b){
                return a-b
            })

    let median = 0
   
    for(let i = 0 ; i < sort.length; i++){
        if(sort.length % 2 != 0){
            
            median = sort[(sort.length-1)/2]

        } else{
            median=(sort[sort.length/2]+sort[(sort.length/2)-1])/2
            
            //console.log(median)
        }
        
    }
    return median
    

  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5