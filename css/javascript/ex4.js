console.log("ex4 solution");

//  step 1 is to call boxes to give it random color 

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);
let boxes = document.querySelector(".container").children
console.log(boxes);
 

//  we have converted html collection of boxes into array because for eacch loop can not be applied on html collection 

function getrandomcolor() {

    //  syntax to generate a random number between two number that is (0 and 255)
    
//  formula to generate a random number between two numbers
        //a +math.random()*(b-a)
    //   math.ceil helps to round off the random integer to nearest integer 
    val1= Math.ceil(0+ Math.random()*255);
    val2= Math.ceil(0+ Math.random()*255);
    val3= Math.ceil(0+ Math.random()*255);
 
    //  we have applied template literals here so that we can perform operations on certain value 
   return `rgb(${val1}, ${val2}, ${val3})`
}

//  next step is to call getrandomcolor so we have to check the best position for it to call 

Array.from(boxes).forEach(e=>{
//    e.style.backgroundcolor=getrandomcolor()
   e.style.color=getrandomcolor()
    e.style.backgroundcolor=getrandomcolor()
})



