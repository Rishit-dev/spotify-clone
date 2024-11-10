console.log(" event listener ");
 
//  calling the element by id and storing it in button to perform operations in it 
let button= document.getElementById("id1")

//  now to apply operations on it 
 
//  here our first argument is to operate click on the button and sceond is what function  we want ro run  after clicking 
// button.addEventListener( "click", ()=>{
// //    here we can perform operation anywhere by clicking on button  

//  document.querySelector(".box").innerHTML="yayy i am cliked "

// alert("i am clicked ")


// })

// button.addEventListener( "dblclick", ()=>{
//     //    here we can perform operation anywhere by clicking on button  
    
//      document.querySelector(".box").innerHTML="yayy i am cliked "
    
//     // alert("i am clicked ")
    
    
//     })

//  here operation will occur after right click on the buttton 
     button.addEventListener( "contextmenu", ()=>{
         
        
          document.querySelector(".box").innerHTML="yayy i am cliked "
        
         alert("i am clicked ")
        
        
        })


    // //  when your resource is not fully loaded not because of error than it will abort it 
    //     button.addEventListener( "abort", (e)=>{
    //         //    here we can perform operation anywhere by clicking on button  
            
    //          document.querySelector(".box").innerHTML="yayy i am cliked "
            
    //         alert("i am clicked ")
            
            
    //         })
    button.addEventListener("keydown",(e)=>{
        console.log(e.key,e.keyCode);
        
    }) 




