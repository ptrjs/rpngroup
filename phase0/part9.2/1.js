//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  let mod=1
  let zero = []
    for(let i = 1; i <= angka; i++){
        mod = angka % i
        if(mod===0){
            zero.push(mod)
            
        }else{
            continue
        }
    }
    
    if(zero.length>2){
        return false
    }else{
        return true
    }
}

// TEST CASES
 console.log(angkaPrima(3)); // true 0 ada 2 
 console.log(angkaPrima(7)); // true 0 ada 2
 console.log(angkaPrima(6)); // false 0 ada 4
 console.log(angkaPrima(23)); // true 0 ada 2
 console.log(angkaPrima(33)); // false 0 ada 4 