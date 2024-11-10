// console.log(" hey harry you are good! ");
// console.log(" hey harry your tshirt is  good! ");
// console.log("hey harry your coding skils are good!");
// console.log("hey harry your npm  is  good!");
// console.log("hey harry your java is good!");


//  suppose we want to rename the name in all these  sentences 
//  we have to create a function which will help in repeating name again and again 

 function cool (name) {
     console.log("hey "+ name +" you are good")
 console.log("hey "+ name +" your tshirt is  good")
 console.log("hey "+ name + "  your coding skils are good")
 console.log("hey "+ name +"  your npm  is  good")
 console.log("hey  "+ name +" your java is good")
 }

 cool("Rohan")

 cool("nithin")

// sum(3,5)

// function sum(a,b) {
//     console.log(a+b);
// }

// result = add(5,6)
// console.log( "the result is:", result);

// function add(c,d){
//     // console.log(a+b);
//     return(c+d)
// }

result1=sum(3,5)
result2=sum(7,8)
result3=sum(9,11)

console.log("the result is: ",result1);
console.log("the result is: ",result2);
console.log("the result is: ",result3);

function sum( a,b,c=2) {
console.log(a,b,c)


return (a+b+c)
    
}

//  this is the frame of an arrow function 
//  with the help of arrow function we can reuse the function any number of times 

const func1 = x=>{
    console.log("i am a arrow function",x);
    console.log("rahul age is: ",x);
    console.log("shubham age is: ",x);
    console.log("rohan age is:",x);

}

func1(34)
func1(22)
func1(24)
func1(19) 