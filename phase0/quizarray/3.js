/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {

    let groups = []
    for(let i = 0 ; i < animals.length; i++){
        let isThere = false
        let firstChar = animals[i][0]

        for (let j = 0; j < groups.length; j++) {
           
            if (groups[j][0][0] === firstChar) {
                groups[j].push(animals[i]);
                isThere = true        
            }
        }
        
        if(!isThere){
            groups.push([animals[i]])
        }
       
    }

    return groups

    
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