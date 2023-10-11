
/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter 
berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: 
input: [['Dimitri', 'B', 'F']] 
output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {

    if(arrPenumpang.length===0) {
        return []
    }

    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let res = []

    for (let i = 0; i < arrPenumpang.length; i++) {
       console.log();
        let penumpang = {
            penumpang:arrPenumpang[i][0],
            naikDari:arrPenumpang[i][1],
            tujuan:arrPenumpang[i][2],
            bayar:(rute.indexOf(arrPenumpang[i][2])-rute.indexOf(arrPenumpang[i][1]))*2000
           
        }
        res.push(penumpang)
    }
    console.log(res);
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
  