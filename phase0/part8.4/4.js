
function pasanganTerbesar(num) {
    // you can only write your code here!
    let strNum = num.toString()
    let res
    let arrRes=[]
    for(let i = 0 ; i<strNum.length;i++){
        res = strNum[i] + strNum[i+1]
        arrRes.push(parseInt(res))
        
    }
   
    console.log(Math.max(...arrRes))
    
  }
  

  // TEST CASES
    console.log(pasanganTerbesar(641573)); // 73
    console.log(pasanganTerbesar(12783456)); // 83
    console.log(pasanganTerbesar(910233)); // 91
    console.log(pasanganTerbesar(71856421)); // 85
    console.log(pasanganTerbesar(79918293)); // 99