async function awake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}


//  this is known as iife immediately ivoke function expression here () is important to write at the end of async function 

(async function main2(params) {
    let a = await awake()
    let b= await awake()
})()


function sum(a,b,c) {
  return a+b+c;
}
( async function main() {
    // var d is appeared to move here without its value 
    console.log(d);
    
// let a= await awake ()
//  console.log(a);

// let b= await awake()
//  console.log(b);


//  concept of destructring 
//  here since on both sides there is arrays so our value got equate and 5 goes in x and 7 goes in y 
// let [x,y] = [ 5,7]
// console.log(x,y);

//  here 3 dots is necaasery to put which represents destructring so here x takes 5 y takes 7 and rest takes rest of the elements in the array 
let [x,y,...rest]=[5,7,8,9,10,11,12]
console.log(x,y,rest);


let obj={
    a:1,
    b:2,
    c:3
}
let {a,b,c}=obj
console.log(a,b,c);



//  let arr=[3,4,5]
//  console.log(sum(arr[0],arr[1],arr[2]))
 
//     spread operator 
//  this three dots here say open the array and it will open up with an function that is sum 
   let arr=[3,4,5]
  console.log(sum(...arr));

  //  hoisting is the process where interpretor appears to move the declerations to the top of the same block code before the execution here only var d will appear to move to the top not its value so at the console output it will give undefined only 
 var d=6;

//   let and const give error since only var can be used for hoisting 
//  let d=6;
//  const d=6;

})()


const a="the" , b="no"
const c ={a,b}
//  it will return a object since c has stored values in it in the form of object 
console.log(c);

//  important 

// variable declared inside the function is said to be a local scope variable therefore it can be operated inside a function only and cannot be use as a globle 
// variable declared outside  the function is said to be a global  scope variable 



