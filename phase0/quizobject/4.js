
/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
    //code here
    let regex = /[a-z,A-Z]+/g
    let route = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"]
    let price = 0
    let cost = 0
    let discount = 0

    let idxDeparture = []
    let idxDestination = []
    

    let res = []
    let maxTotal = -1
   
    for (let i = 0; i < arr.length; i++) {
       // console.log(arr[i].match(regex));
        let name = arr[i].match(regex)[0]
        let departureCity = arr[i].match(regex)[1]
        let destinationCity = arr[i].match(regex)[2]
        let transport = arr[i].match(regex)[3]
        
        for (let j = 0; j < route.length; j++) {
            
       
            if(route[j]===departureCity){
                idxDeparture.push(j)
            }else if(route[j]===destinationCity){
                idxDestination.push(j)
            }
            
              
        }
        let range = Math.abs(idxDestination[i]-idxDeparture[i])

        if(transport==="Pesawat"){
            price = 275000   
        }else if(transport==="Kereta"){
            price = 250000
        }else if(transport==="Bis"){
            price = 225000
        }
        
        if(emoney==="OVO"){
            discount = 15/100
        }else if(emoney==="Dana"){
            discount = 10/100
        }else if(emoney==="Gopay"){
            discount = 5/100
        }else{
            discount = 0
        }

        cost = range * (price - (price * discount))

        let obj = {
            name:name,
            departureCity:departureCity,
            destinationCity:destinationCity,
            transport:transport,
            totalCost:cost
        }
        
        console.log(`Processed: ${name}, Total Cost: ${cost}`);
        
        res.push(obj)
     }


     let isDone = false

     while(!isDone){
         isDone = true
         for(let i = 1 ; i < res.length; i++){
             if(res[i-1].totalCost<res[i].totalCost){
                 isDone=false
                 let tmp = res[i-1]
                 res[i-1]=res[i]
                 res[i]=tmp
             }
         }
     }
     return res

  
     
  };

  
  console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
  /*
  [ { name: 'Bahari',
      departureCity: 'Semarang',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 467500 },
    { name: 'Alif',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Kereta',
      totalCost: 212500 },
    { name: 'Danang',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Bis',
      totalCost: 191250 } ]
  */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
   /*
  [ { name: 'Shafur',
      departureCity: 'Surabaya',
      destinationCity: 'Yogyakarta',
      transport: 'Kereta',
      totalCost: 450000 },
    { name: 'Taufik',
      departureCity: 'Semarang',
      destinationCity: 'Surabaya',
      transport: 'Pesawat',
      totalCost: 247500 },
    { name: 'Alex',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Kereta',
      totalCost: 225000 } ]
  */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
   /*
  [ { name: 'Katy',
      departureCity: 'Surabaya',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 261250 },
    { name: 'Andika',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Bis',
      totalCost: 213750 } ]
   */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
   /*
  [ { name: 'Putra',
      departureCity: 'Denpasar',
      destinationCity: 'Yogyakarta',
      transport: 'Pesawat',
      totalCost: 825000 } ]
   */
  console.log(travelingIndonesia([], 'Cash')); // [];
  
  