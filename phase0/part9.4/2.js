
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let raw = []
    for(let i = 0 ; i < str.length; i++){
       
        for(let j = 0 ; j < alphabet.length; j++){
             if(str[i]===alphabet[j]){
 
               raw.push(j)
                 
             }
        }
        
     }
     bubbleSort(raw)
   //  console.log(raw)

   let idx=0 
   let word=""
     for(let i = 0 ; i < raw.length; i++){
       idx=raw[i]
        word+=alphabet[idx]
        
    }
    return(word)

     
  }

  function bubbleSort(arr){
        let isDone = false

        while(!isDone){
            isDone = true
            for(let i = 1 ; i < arr.length; i++){
                if(arr[i-1]>arr[i]){
                    isDone=false
                    let tmp = arr[i-1]
                    arr[i-1]=arr[i]
                    arr[i]=tmp
                }
            }
        }
        return arr
  }
  
  // TEST CASES
 console.log(urutkanAbjad('hello')); // 'ehllo'
 console.log(urutkanAbjad('truncate')); // 'acenrttu'
 console.log(urutkanAbjad('developer')); // 'deeeloprv'
 console.log(urutkanAbjad('software')); // 'aeforstw'
 console.log(urutkanAbjad('aegis')); // 'aegis'