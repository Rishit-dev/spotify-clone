let a=prompt("enter first  number")

let b=prompt(" enter another number ")

//  here a and b are stored as string format so b will append at the end of a 

//  we can also give conditional statements here 
// this is a way of throwing error where we want 
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("this  is not allowed ");
    
} 


//  so first of all we have to convert it into integer format 
 let sum= parseInt(a)+ parseInt(b)
alert(sum)

//  another method 
// let sum= (+a)+ (+b)
// alert(sum)

// console.log("the sum is : ",sum*5);

//  if you put string in a and b its ouput will be (nan)  that is not a number 

//  basically there are two types of error: error throw and error handlng 
//  error thorw is the error which we give in the command but error handling is the error due to server error which may be unexpected so we could retry it so we use trycatch here 
 
 function main(){
    try {
        console.log("the sum is : ",sum*x);
        return true 
       
    } catch (error) {
        console.log("nope this is error");
       return false
    }
   
   //   finally is used mainly inside a function because things inside finally will also execute if their is return statement after try and catch 
     finally{
       console.log("end of the code id here");
       
     }

}

main()

//   try catch works synchronously ( in a proper order )
//   but since settimout is async function so if it shows error than catch will not be executed 
// try {
//     setTimeout(() => {
//         console.log("i am a timeout function ");
//         //  if there is some error in the settimout function then by default script will end here and catch error will not be executed 
//     }, 3000);
// } catch (error) {
// //     for catching details of error 
//     console.log( "error.name");
//     console.log("error.message");
    
// }

async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(20)
        }, 3000);
    })
}

async function main() {
    data = await getdata()
    console.log(data);
    
}
main()