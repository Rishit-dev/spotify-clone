console.log( "hey i am loops tutorial");

// program for computing couting from(1-10)

// methdd-1

// let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);
// console.log(a+4);
// console.log(a+5);

//  but this is very bad and time consuming so we have loops 

let a=1;
for (let i = 0; i <100; i++) {
   
    console.log(a+i);
} 

let obj={
    "name":"harry",
    "job profile":"developer",
    "compnay name":"apple"
    

}
for (const key in obj) {
    {
        const element = obj[key];
        console.log(key,element);
        
    }
}

for (const c of "harry") {
    console.log(c);
}


// for (const name of obj) {
//     console.log("name");
// }

let i=0;
while (i<6) {
    console.log(i);
    i++
}
 let d=0;
 do {
   console.log(d);
   d++  
 } while (d<6);
