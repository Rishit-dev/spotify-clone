console.log("this is promises");

let prom1=new Promise((resolve,reject)=>{
    
    let b=Math.random()
    
    if (b<0.5){
        reject("no number was supporting this ")
        
    }
    else{
        setTimeout(() => {
            console.log("hey i am printed");
            resolve("harry")
         }, 3000);
      
    }
    
})

//  here "a" represents the value of resolve that is harry as represented above 

let prom2=new Promise((resolve,reject)=>{
    
    let b=Math.random()
    
    if (b<0.5){
        reject("no number was supporting this 2 ")
        
    }
    else{
        setTimeout(() => {
            console.log("hey i am printed 2");
            resolve("harry 2")
         }, 3000);
      
    }
    
})
//  .allsettled tels us about the status and reasons  of all promises 
//  promise.all return us whether resolved or not 
//  promise.race waits for the first promise to settle and then it's result/error beccomes the output bascically its is race 
//  promise.any waits till any one of promise is fulfilled (not rejected ) then its result becomes the ouput 
//  promise.resolve(value) is given for specific value with resolution 
//  promise.reject(value) is given for specific value with rejection 
let p3=  Promise.allSettled([prom1,prom2])

p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})

// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })