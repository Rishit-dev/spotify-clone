console.log(" this is a video of callback and promises ");

//  first of all let use understand asynchoronous actions 

//   asynchoronous actions are those which are called first and are exectued lately after efter of all script like in setTimeout function there is time delay so it will be waited to execute at last 

//  like ex of :

console.log("harry is a coder ");
console.log(" abhisshek is also a coder");

setTimeout(() => {
    console.log("i am printed after execution of other script ");
    
}, 1000);

console.log("all is good");
//  here is output of the order  
// this is a video of callback and promises 
// callback&promises.js:9 harry is a coder 
// callback&promises.js:10  abhisshek is also a coder
// callback&promises.js:17 all is good
// callback&promises.js:13 i am printed after execution of other script


//  callback function 

//  multiple calling function
 
const ddg =()=>{
    console.log("i am ddg ");
    
}
 
  const arg2=()=>{
    console.log("i am an arg2 function ");
    ddg()
    
  }
 const fn=()=>{
     console.log("i am another function ");
    arg2()
    
    
 }

 const fn2=()=>{
    console.log(" i am fn2");
    
 }

//   callback functions are used specifically for asynchoronous functions


//  here we are passing arguments so no need to give "" 
//  instedad of creating another function named as callback we put the argument inside loadscript function itself 
// let callback=( harry,fn)=>{
//     console.log("harry");
//      fn()   calling the function fn()
    
// }

const loadscript =(src,callback)=>{
 let sc=document.createElement("script")
 sc.src=src;

//   harry is not a function so it is included in inverted commas whilw fn is a function so it has not to be included in this ""

//  onload is used to execute a script once the web page is completly loaded 
 sc.onload=callback("harry",fn,fn2);
 document.head.append(sc)
}


//  we can also replace callback function form here and directly place function here 

//  this is called callback hell or pyramid of doom
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",( harry,fn,fn2)=>{
    console.log("harry");
     fn((arg2)=>{
        console.log("i am another function ");
        arg2()
     }
    )

    fn2()
    
} )
