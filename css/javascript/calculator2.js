
let a=prompt("enter a number");
let b=prompt("enter a number");
let c=prompt("enter operation");

add=(+a)+(+b);
minus=a-b;
multiply=(a*b);
divide=(a/b);




let random= Math.random()


// func1 wellcalc(a,b){
// console.log("addition:",a+b);
// }

// func2 faltcalc(a,b){}

// sum= add(a,b);
// minus=subtraction(a,b);

//  this can also be done by making a function called as wellcalc in which we can give the correct instructions to it and another function name as faltcalc where we can give the error instructions to it and in the if else statement we can call the function

if (random>0.1) {

    if (c=add) {
        console.log("+:",(+a)+(b));
        // alert("console.log(add);")
    }
   if (c=minus) {
    console.log("-:",a-b);
   }
   if (c=multiply) {
    console.log("(*):", (a*b));
   }
   if (c=divide) {
    console.log("/:",a/b);
   }
    

    // wellcalc(a,b)

    
} else {
    if ( c=add) {
        console.log("+:", (+a)-(+b));
    }
   if (c=minus) {
    console.log("-:",(+a)+(b));
   }
   if (c=multiply) {
    console.log("(*):", (a/b));
   }
   if (c=divide) {
    console.log("/:",(a*b));
   }

    // faltcAlc(a,b)
}