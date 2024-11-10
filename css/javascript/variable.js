

// lets see difference between variable  and constant 

// var a=5;
// var b=6;
// var c="rishit";

let a=5;
a=a+1;
let  b=6;
let c="rishit";

// //  rules for creating variables 
// // must begin with a ,($ or _ or a letter )
 var _rohit="shubham";
var $rohan="ramesh";

// console.log(a+b+c);
// console.log(typeof a , typeof b, typeof c, typeof _rohit, typeof $rohan);

// value changing of constant is not allowded 
// const a1=6;
// a1=a1+6;
 
// making a block 

// var takes the value at (local variable/block) also and make it a global variable 
// {
//     var a=8;
//     console.log(a);
// }

// console.log(a);

// {
//     // here let is only used for block scope while var is used for global scope 
// let a=9;
// console.log(a);
// }
 
// console.log(a);

let x=3;
let y=5;
let z=8;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// object decalartion 
 
let o={
   
    // frame ( key = value) each seprated by commas 
   
    "name": "harry",
    "job code": "5656",
    "is_handsome":true

}
console.log(o);
// if you want to add more keys 
// frame o.key value 
o.salary="1cr";
console.log(o);

// // let stu={
// //     "name":"risit",
// //     "ph number": 9319975886 ,
// //     "marks": "100"

// }
console.log(stu);