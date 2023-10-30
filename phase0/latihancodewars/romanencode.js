function solution (roman) {
    let sum = 0
    for(let i = 0 ; i<roman.length;i++){
        let tmp = -1
      
      if(switchingRoman(roman[i]) < switchingRoman(roman[i+1])){
        tmp = switchingRoman(roman[i]) *-1
        
      }else{
        tmp = switchingRoman(roman[i])
      }
      
      sum +=tmp
      
      
      
    //  sum +=switchingRoman(roman[i])
      
      
    }
      return sum  
    
    
    
  }
  
  
  function switchingRoman(roman){
    
    switch (roman) {
      case 'I':
        value = 1;
        break;
      case 'V':
        value = 5;
        break;
      case 'X':
        value = 10;
        break;
      case 'L':
        value = 50;
        break;
      case 'C':
        value = 100;
        break;
      case 'D':
        value = 500;
        break;
      case 'M':
        value = 1000;
        break;
        
      default:
        value:0;
    }
    return value
  }
  
  
  console.log(solution('DCCXLVII'))
  
  // I          1
  // V          5
  // X          10
  // L          50
  // C          100
  // D          500
  // M          1,000