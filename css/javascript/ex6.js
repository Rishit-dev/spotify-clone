// console.log("this is ex6");

// let a=1000+Math.random()*6000

// function hackterm(p1,p2,p3,p4,p5) {
//     setTimeout(() => {
//         // console.log("hey i am printed ");
//         let html=`   
//         <div class="content">
//             <p> "${p1}" </p>
//             <p> "${p2}"  </p>
//             <p> "${p3}" </p>
//             <p> "${p4}" </p>
//             <p> "${p5}"</p>
//         </div>`
        
//          document.querySelector(".content").innerHTML=html
//     }, a);
// }

// hackterm( "initialising hacking...","readng your files...", "password files detected...","sending al personal flies and data to the server...", "cleaning up.." )
  

//  another method 
// let a=1000+Math.random()*6000
// // =1000+Math.random()*6000
// // let d=1000+Math.random()*6000


//  async  function getloaded(p1,p2,p3,p4,p5) {
    
//         setTimeout(() => {
//             let html=`   
//                     <div class="content">
//                          <p> "${p1}" </p>
//                          <p> "${p2}"  </p>
//                          <p> "${p3}" </p>
//                          <p> "${p4}" </p>
//                          <p> "${p5}"</p>
//                      </div>`

//                      document.querySelector(".content").innerHTML=html    
                     
//         }, a); 
//     return true
//     }

    
   

//    async function main() {

//      let html="your data is loading..."
//     let load=await getloaded("initialising hacking...","readng your files...", "password files detected...","sending al personal flies and data to the server...", "cleaning up..")
//     load()
  

//     }


    //  correct solution by harry 

    //  always await is called within a async function 

    //  we have made this  additem a async function because of which it runs in background and if we want to wait for this code to execute we will write await when it is called in the main function 
    const additem= async(item)=>{
        await randomdelay();
         let div= document.createElement("div")
         div.innerHTML=item;
         document.body.append(div)
        
     }



   const randomdelay=(item)=>{
    //  for returning the value of timeout to additem we use return new promise   
    return new Promise((resolve, reject) => {
        timeout=1+Math.random()*6
        setTimeout(() => {
        //  passing resolve() is also necesaary so that new promise is executed and it returns if it is not passed randomdelay() will not occur 
          resolve()
        }, timeout*1000);
        
      })  
   }


    let  t =setInterval(() => {
    let last = document.body.lastElementChild
    //  last.innerHTML=last.innerHTML + "."
      if (last.innerHTML.endsWith("...")) {
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
      } else {
         last.innerHTML=last.innerHTML + "."
      }
    
    }, 100);

 
  async function main() {
  
  

//     inside the array text we have items 
    let text =["initialising hacking","readng your files", "password files detected","sending all personal files  and data to the server", "cleaning up"]
    
//     for iteration in each element inside text we use (for of) loop 

for (const item of text) {
    //  generating a  function named as additem for implemening changes inside our text in items 
    await  additem(item)
}

//  for stopping the setinterval function 
await randomdelay()
clearInterval(t)

 }
main()