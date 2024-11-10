console.log(" conditional loops statements ");

let age=1;
// let grace=8;

// age+=grace;
// console.log(age);

// // now value of age is increased and it wil be set as global variable because let is used in global scope 
// console.log( grace**age);

// // remainder operator 
// console.log(age % grace);

// if ((age-grace)>18){
//     console.log("you can drive");
// }

// else{
//     console.log("you can not drive ");
// }
 if (age==18){
 console.log("you can drive");
 }
 else if(age==0){
     console.log("are you kidding");
 }

 else if(age==1){
     console.log("are you again kidding");
 }
 else{
     console.log("you can not drive");
 }

//   ternary operator
   a=5;
   b=7;

   let c = a > b ? (a-b) : (b-a);