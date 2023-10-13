/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui 
berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). 
Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    // code di sini
    
    let isDone = false
    while(!isDone){
        isDone=true
        for (let i = 0; i < arrNumber.length; i++) {
            if(arrNumber[i-1]>arrNumber[i]){
                isDone=false
                let tmp = arrNumber[i-1]
                arrNumber[i-1]=arrNumber[i]
                arrNumber[i] = tmp
            } 
            
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    
    sorting(arrNumber)
    let highNum=0
    let count=0
    for (let i = 0; i < arrNumber.length; i++) {
       highNum = arrNumber[arrNumber.length-1] 
       if(arrNumber[i]===highNum){
            count++
       }
    }
    return `angka paling besar adalah ${highNum} dan jumlah kemunculan sebanyak ${count} kali`
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    if(arrNumber.length===0){
        return ' '
    }
    
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
   console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
   console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
   console.log(mostFrequentLargestNumbers([]));
   //''
  
  