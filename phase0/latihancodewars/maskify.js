// function maskify(cc) {
//     let awal = "" 
//     let mask = ""
//     let akhir = 0 
//     let regex = /[0-9]+/g
//     for(let i = 0 ; i < cc.length; i++){
//       if(i=>4){
//         akhir = cc.slice(cc.length-4)
//         awal =  cc.slice(0,cc.length-4)
//         mask = '#'.repeat(awal.length)
//       }else if(i<=2){
//         akhir = cc.slice(cc.length-1)
//         awal =  cc.slice(0,cc.length-1)
//         mask = '#'.repeat(awal.length)
//       }else if(i<1){
//         akhir = cc.slice(cc.length)
//         awal =  cc.slice(0,cc.length)
//         mask = '#'.repeat(awal.length)
//       }
      
//     }
//     return mask+akhir
  
//   }
  
  
  
  function maskify(cc) {
    if (cc.length <= 4) {
      return cc; 
    }
  
    const lastFour = cc.slice(-4);
    const masked = '#'.repeat(cc.length - 4) + lastFour;
    return masked;
  } 
  
  
  
  console.log(maskify('4556364607935616')) // '############5616'
  console.log(maskify('1')) // '1
  console.log(maskify('11111')) // '#1111'