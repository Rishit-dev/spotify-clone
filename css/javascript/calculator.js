
let a=prompt("enter a number");
let b=prompt("enter a number");
let c=prompt(" enter operation");



let random= Math.random()


// func1 wellcalc(a,b){
// console.log("addition:",a+b);
// }

// func2 faltcalc(a,b){}

// sum= add(a,b);
// minus=subtraction(a,b);

//  this can also be done by making a function called as wellcalc in which we can give the correct instructions to it and another function name as faltcalc where we can give the error instructions to it and in the if else statement we can call the function

if (random>0.1) {
    console.log("+:", (+a)+(+b));
    console.log("-:",a-b);
    console.log("(*):", (a*b));
    console.log("/:",a/b);

    // wellcalc(a,b)

    
} else {
    console.log("+:",a-b);
    console.log("-:",(a*b));
    console.log("(*):", (a/b));
    console.log("/:",(a**b));

    // faltcAlc(a,b)
}



