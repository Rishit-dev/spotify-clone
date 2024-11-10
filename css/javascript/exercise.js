//  let rand=  1+ 99*Math.random()
// let a = parseInt(rand);
// console.log(a);

// let b = prompt("enter a number to check")


// let rand=  1+ 99*Math.random()
// var a = parseInt(rand);
// console.log(a);

// function guess(b,a){
//    if (b=a) {
//     console.log("you guessed it right");
    
//    } 

//   else if (b>a) {
//     console.log("number is greater");
    
//   }

//   else if (b<a) {
//     console.log("number is smaller");
    
//   }
// }

// guess()


// let rand=  1+ 99*Math.random()
// var a = parseInt(rand);
// console.log(a);

// ("The Snake, Water, Gun (SWG) game is a two-player game where each player chooses one of three objects: snake, water, or gun. The game's rules are: 
//  Snake vs. Water: Snake wins by drinking the water. 
//  Water vs. Gun: Gun drowns in water, giving a point to water. 
//  Gun vs. Snake: Gun kills the snake and wins. 
//  Draw: If both players choose the same object, the result is a draw");
 
// let s,w,g;

// let a=prompt("enter your choice")
// //  basically we are introducing a rand function which will be in between 0 to 1 
// let rand=Math.floor(Math.random())
// let number =["s","w","g"][rand]

// if (rand>0 && rand<0.33) {
//   console.log("s");
  
// }
//  else if (rand>0.33 && rand<0.66) {
//   console.log("w");
  
// }
//   else if (rand>0.66) {
//   console.log("g");
  
// }
// let match=()=>{ 
//    if (a=g && 0<rand<0.33 ) {
//       return "user wins " 
//    }
   
//    else if (a=s && 0.33<rand<0.66) {
//          return "snakes wins by drinking thw water"
//    }
 
//    else if (a=w && rand>0.66) {
//        return "guns drown in water and water wins"
//    }
//   }

//   let result = match()
//  console.log(result);
 
  //  correct method 


//  let user =prompt("enter your choice")

//  let rand=Math.floor(Math.random()*3)
// let comp =["s","w","g"][rand]

// let play=(user,comp)=>{
   
//   //  double == is give to check whether the left hand and right hand side are equal or not 

//   //  while single = is used to assign the value of the variable of left hand side to the right hand side 
//   //  whilw === is used to check whether the value and class of both lhs and rhs are equal or not 
//   if (user==comp) {
//     return "nobody"
//    }
   
//     else if (user=="s" && comp =="g") {
//        return "comp"
//    }

//    else if (user=="s" && comp=="w") {
//        return "water"
//    }

//    else if (user=="w" && comp=="s") {
//     return "user"
// }


// else if (user=="w" && comp=="g") {
//   return "user"
// }

// else if (user=="g" && comp=="w") {
//   return "comp"
// }

// else if (user=="g" && comp=="s") {
//   return "user"
// }

// }


// let result = play(user,comp)
// // console.log(result);

// document.body.innerHTML=`the user entered  ${user} and  the comp entered ${comp} and the result is ${result}`


//  here eh have created an array 

//  finally this is the solution 
let joke =["hey i am fine","hey i am not fine","how are you","you wanna hear a joke","let me recite it for you"]


function getrandomjoke() {
   let random= Math.floor(Math.random()*joke.length)
   // joke [index value ====> random ] 
   return joke[random]


}

let jokes =getrandomjoke()

//  always use += instead of again writing innerhtml +=  after .innerhtml simply means to append text after innerhtml  

//  "$" is used in template literals in cases mostly where it is predifined early in the form of a  function 
  document.body.innerHTML+= `the joke is : ${jokes}` 
// }
 
  // document.body.innerHTML+= `the joke is : ${getrandomjoke} <br>`
  

  
  //  method of fetch  api 
// let jokecontainer= document.getElementById("joke")
// let btn = document.getElementById("btn")
    
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,ist,explicit&type=single";  

// let getJoke = () => {
//   jokeContainer.classList.remove("fade");
//   fetch(url)
//   .then(data => data.json())
//   .then(item =>{
//       jokeContainer.textContent = `${item.joke}`;
//       jokeContainer.classList.add("fade");
//   });
// }

// btn.addEventListener("click",getJoke);
// getJoke();



async function main(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` the repetation is in every ${n} sec`)
    }, n*1000);
  })
}


//  iife code syntax 
(async function main2(n) {
  //  now we have to execute the code for different values of n that is at different time interval 
  //  time stamps is taken  
  let times=[2,3,4]
  

  //   now that we have taken the time stamps , now just we have to  give it to main() 
   for (const time of times) {
      let result=await main(time)
      console.log(result);
      

   }

})()


function avg(a,b) {
  return (a+b)/2
}

let arr=[3,4]
console.log(avg(...arr));


  











