/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let tmp1=0
    let tmp2=[]
    let tmp3=0
    for(let i = 0 ; i<arr.length;i++){ 
        if(arr[i]=='o'){
            tmp1 = i
      
        } else if(arr[i]=='x'){
            tmp2.push(i)

        } else if(arr[i]==' '){
            continue
        } 
 
        
    }
    let minimumX  = Math.min(...tmp2)

    if(minimumX=="Infinity"){
        minimumX = null
    }


    for(let i = 0 ; i<tmp2.length;i++){
       if(tmp2[i]<tmp1){
            minimumX = Math.max(...tmp2)
       } else{
            tmp3=0
       }

    }

    
    
    
    //console.log(`o: ${tmp1}`)
   //console.log(`x: ${minimumX}`)
    
    if(minimumX==null){
        tmp1 = 0
    }
    
    let jarak = 0
    
    if(minimumX>tmp1){
        return minimumX-tmp1
    }else{
        return tmp1-minimumX
    }
    
    //console.log(`jarak: ${minimumX-tmp1}`) 

  }
  
  // TEST CASES
 console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
 console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
