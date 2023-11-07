
/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    let stringed  = equation.toString()
    let firstChar = stringed[0]
    let restChar = stringed.slice(1)
    
    if(stringed.length===0){
        return ''
    }

    if(stringed.length===1){
        return stringed
    }

    let num = 10 ** (stringed.length - 1)

    if (firstChar=== '0'){
        return '0'
      }
      else if (restChar === '0') {
        return firstChar * num + '';
      } else {
        return firstChar * num + ' + ' + parseNumber(restChar);
      }
  };
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3
  
  /*

   

  */