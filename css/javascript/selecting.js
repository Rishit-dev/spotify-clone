console.log("selecting by classes id and more");

//  getting element by its class name 
 let  boxes =document.getElementsByClassName("box")
  console.log(boxes);
  
// //  since we  have created a variable named as boxes we can perform operations on it wihtout putting it again in (console.log..)
// boxes[2].style.backgroundcolor="red"



//  for giving any changes permanently and ignoring its indexes we use the concept of (getelementbyid)
document.getElementById("box2").style.backgroundColor = "red"


//  this property cannot be helpfull in specific selection as like id because The classNames argument is interpreted as a space-separated list of classes.
// document.getElementsByClassName("newbox").style.backgroundColor="yellow"

// this is used to select only the first element from the box 
document.querySelector(".box").style.backgroundColor = "violet"

//  this is not correct since we can not use .style with our html collection it is only applicable for a certain element 
// document.querySelectorAll(".box").style.backgroundColor="violet"


//  for each/ for loop can be used to access all elements in the html collection 

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="green"
});

// declaring e as a function to store value in it that is written in the code 
  let  e= document.getElementsByTagName("div")
    e[3].closest(".container")
    
    e[2].matches(".newbox")



//  check whether the specific query selector contains or not 

//  here we dont have to use ("") in e[3] because 'e' is declared as a variable 
document.querySelector(".container").contains(e[3])
// output 
true

document.querySelector(".container").contains(document.querySelector(".newbox"))
true

document.querySelector(".container").contains(document.querySelector("body"))
false 

document.querySelector("body").contains(document.querySelector(".container"))
true



