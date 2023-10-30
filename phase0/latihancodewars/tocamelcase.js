function toCamelCase(str){
    let splitter = str.split(/[-_]/)
    let res = []
    for(let i = 0 ; i < splitter.length; i++){
            if(i===0){
              res.push(splitter[i])
              
            }else{
              res.push(splitter[i][0].toUpperCase() + splitter[i].slice(1))
            }
    }
  
    return res.join('')
    
    
  }
  
  
  console.log(toCamelCase("the-stealth-warrior")) //"theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior")) //"TheStealthWarrior"
  console.log(toCamelCase("The_Stealth-Warrior")) //"TheStealthWarrior"