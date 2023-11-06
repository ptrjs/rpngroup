
/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
    //code here
  
 
    let counter = 0;
    let resNum = [];

    for (let i = 0; i < num; i++) {
        let subArray = [];
        
        for (let j = 0; j < num; j++) {
             counter += 1
            
             subArray.push(counter);
           
        }
        
        resNum.push(subArray);
    }

    let res=[]
    for (let i = 0; i < resNum.length; i++) {
        if(i%2!=0){
           bubbleSort(resNum[i])
           convertNum(resNum[i])
           
        }else{
            convertNum(resNum[i])
        }
        
        res.push(resNum[i]);
    }

    return res
    

  }

  function bubbleSort(arr) {
    let isDone = false
    while(!isDone){
        isDone = true
        for(let i = 1 ; i < arr.length; i++){
            if(arr[i-1]<arr[i]){
                isDone=false
                let tmp = arr[i-1]
                arr[i-1]=arr[i]
                arr[i]=tmp
            }
        }
    }
    
  

  }

  function convertNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0) {
            arr[i] = '#';
        }
        else if (arr[i] % 2 === 0) {
            arr[i] = 'o';
        } else if (arr[i] % 2 !== 0) {
            arr[i] = 'x';
        } 
    }
  }
  console.log(squareNumber(3));
  // [ [x, o, x],  [o, x, #], [x, #, x] ]
  
  console.log(squareNumber(4));
  // [ [ x, o, x, # ],
  //   [ #, x, o, x ],
  //   [ x, o, x, # ],
  //   [ #, x, o, x ] ]
  
  console.log(squareNumber(5));
  // [ [ x, o, x, #, x ],
  //   [ o, x, #, x, o ],
  //   [ x, #, x, o, x ],
  //   [ #, x, o, x, # ],
  //   [ x, o, x, #, o ] ]
  
//  console.log(squareNumber(2)); // Minimal input adalah 3
  
  
  