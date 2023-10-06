/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {

    let groupA = []
    let groupC = []
    let groupK = []
    let groupU = []

    for(let i = 0 ; i < animals.length; i++){
        if(animals[i][0]=='a'){
            groupA.push(animals[i])   
        }else if(animals[i][0]=='c'){
            groupC.push(animals[i])   
        }else if(animals[i][0]=='k'){
            groupK.push(animals[i])   
        }else if(animals[i][0]=='u'){
            groupU.push(animals[i])   
        }
       
    }

    return [groupA, groupC, groupK, groupU]
}
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



  /* salah 
  
  function groupAnimals(animals) {
    // you can only write your code here!
   
    let groups = [];
    
  
    for(let i = 0 ; i < animals.length; i++){
        let firstChar = animals[i][0]
        
        if(!groups[firstChar]){
            groups[firstChar] = []
        }
        
        groups[firstChar].push(animals[i])
  
            
        }
  
    return groups
  

    
  }
 
  
  
  
  */