let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
   
    input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro").unshift("0001")
    
    
    let dateSplit = input[3].split("/")
    let month=""
    if(dateSplit[1] == 0o5){
        month = "Mei"
    }

   let newDate = [dateSplit[2], dateSplit[0], dateSplit[1]]

   let dateDash= input[3].split("/").join("-")

   let strLimit = input[1].slice(0,15)

 
    return{input,month,newDate,dateDash,strLimit}

}

console.log(dataHandling2(input)) 

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */