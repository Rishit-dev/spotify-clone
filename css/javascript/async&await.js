
//  async function is throwed in background an basically it used to return a promise and in promise we can get its status checked or if it is a object we will get its key values and element  

//  async function getloadedinput(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("100")
//         }, 3000);
//     })
// }
//   Use Of Fetch Api 

async function getloadedinput(){
    //  it will return a promise 
    //  fetch api fetches the data from server and gives it to user 
    // let x=  await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let x=  await  fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    //  we await till the data is passed into json()
    let data= await x.json()
    //  it can be passed into text also 
    // let data= await x.text()
   
    return data
    
}



async function  main() {
    console.log("hey this is a video of async and await function");

console.log("loading documents");

console.log("load another documents ");

//  awaits waits for the function thats is called beside it for execution 
//  if await is removed from here output will be only promised no data will come since we have  not waited for the data 
let load=  await getloadedinput()
console.log(load);

console.log("output is obtained");

console.log("output is good");


}

main()
// console.log("hey this is a video of async and await function");

// console.log("loading documents");

// console.log("load another documents ");

// let load= getloadedinput()
// console.log(load);

//  this script will be executed once our promise is fulfilled 

//  method 1 but it is same like a callback function so we go for another method 
// load.then((give)=>{
//     console.log("output is obtained ");

// console.log("output is good");


// })









