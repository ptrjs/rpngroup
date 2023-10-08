//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let crypt = []
    for(let i = 0 ; i < kata.length; i++){
       
       for(let j = 0 ; j < alphabet.length; j++){
            if(kata[i]===alphabet[j]){
                if(alphabet[j]==='z'){
                  crypt.push('a')  
                }else{

                    crypt.push(alphabet[j+1])
                }
            }
       }
       
    }
    let word = ""
    for(let i = 0 ; i < crypt.length; i++){
        
        word+=crypt[i]
    }

    return word

    
  }
  
  // TEST CASES
 console.log(ubahHuruf('wow')); // xpx
 console.log(ubahHuruf('developer')); // efwfmpqfs
 console.log(ubahHuruf('javascript')); // kbwbtdsjqu
 console.log(ubahHuruf('keren')); // lfsfo
 console.log(ubahHuruf('semangat')); // tfnbohbu
 console.log(ubahHuruf('zebra')); 