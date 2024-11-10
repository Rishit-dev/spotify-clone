let arr7=[1,13,5,7,11]

let newarr=arr7.map((element,index,array)=>{
return element**2
})
console.log(newarr);


// application of filter 

//  making a function with one argument that is 'e'  with the help of arrow function and therefore we can make make changes on our argument 'e'

//  no use of return after we use return in our if statement 
let greaterthanseven=e=>{
    if (e>7) {
        return true 
        
    }
else{
    return false 
}

}

console.log(arr7.filter(greaterthanseven));


// //   good referal for arrow function

// https://www.geeksforgeeks.org/arrow-functions-in-javascript/



// here our square is a function and x is a argument 
let area=(x,y)=>{
//    console.log(x*y);
//    or 
   return x*x
}
 console.log(area(4,5));

let red=(a,b)=>{
    return a+b
}


 console.log(arr7.reduce(red));
 