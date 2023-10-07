//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let fact1 = angka1/2
    let fact2 = angka2/2
    let arrFact1 = []
    let arrFact2 = []
    for(let i = 1; i<=fact1;i++){
       
        if(angka1%i!==0){
            continue
        } else{

            arrFact1.push(i)
        }
    }
    
    for(let i = 1; i<=fact2;i++){
       
        if(angka2%i!==0){
            continue
        } else{

            arrFact2.push(i)
        }
    }



    // console.log(arrFact1)
    // console.log(`-----------`)
    // console.log(arrFact2)

    const intersect =  arrFact1.filter(element =>{
      return  arrFact2.includes(element)
    })

    console.log(intersect[intersect.length-1])
   
    
  }
  
  // TEST CASES
 console.log(fpb(12, 16)); // 4
 console.log(fpb(50, 40)); // 10
 console.log(fpb(22, 99)); // 11
 console.log(fpb(24, 36)); // 12
 console.log(fpb(17, 23)); // 1

 
 