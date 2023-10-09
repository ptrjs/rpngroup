function changeMe(arr) {
    // you can only write your code here!
    let res = {};

    for(let i = 0 ; i < arr.length; i++){
        let firstName = arr[i][0]
        let lastName = arr[i][1]
        let gender = arr[i][2]
        let birthYear = arr[i][3]
        let age
        if(birthYear===undefined){
            age = 'Invalid Birth Year'
        }else{
            age = new Date().getFullYear() - birthYear
        }

        const person = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age:age
        }

        res[`${firstName} ${lastName}`] = person
    }

    console.log(res);

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""
  