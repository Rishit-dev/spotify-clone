let arr5=[1,93,5,7,88]

for (let index = 0; index < arr5.length; index++) {
    const element = arr5[index];
    console.log(element);
    
    
}

//  it gives the output as systematically shown in the loop
// arr5.forEach((value , index , array ) => {
//     console.log( value, index. array );
    
// });

let obj={
    "name":"harry",
     "job":"developer"

}


//  used for obtaining key and element value of a object 
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = Object[key];
        console.log(key , element);
        
        
    }
}

for (const iterator of arr5) {
   console.log(iterator);
    
}

