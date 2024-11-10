// let a=prompt("enter a number")

// let factorial= ()=>{
//     for (let i=(a-1) ; i >= 1; i--) {
//      return a*i
      
        
//     }
// }
// console.log(factorial());

// //  another method 

// let a1=[1,2,3,4,5]

// let red=(a,b)=>{
//     return a*b
// }


// console.log(a1.reduce(red));

let a =6

function factorial(number){

    //  method of  calling an array 
    //  +1 is done for increaing the value of number to one more element 
    let arr= Array.from(Array(number+1).keys())
    // console.log(arr.slice(1,number+1));
    let c=arr.slice(1,).reduce((a,b)=>{
          return a*b
    }

    )
     console.log(c);
}
factorial(a)

function facfor(number){
    let fac =1;
    for (let index = 1; index <= number; index++) {
    fac=fac*index
    
}
return fac
}

console.log(facfor(a));

