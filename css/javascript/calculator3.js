
//  you also have to follow the same order  while you are declaring the varibales as the same order in eval element

let a=prompt("enter a number")
let c=prompt("enter a operation")
let b=prompt("enter a number")



let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/": "**"
}
let random= Math.random()

if (random>0.1) {
   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
   console.log("The result is ${eval(`${a} ${c} ${b}`)}");
}
 else {
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}