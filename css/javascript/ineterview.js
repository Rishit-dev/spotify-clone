// console.log("this is a set of intervieew question");

// let students =["shubh","anjali","shivangi","shivani" ,"annapurna","shivene","rishit","shivesh"]

// for (const names of students) {
//     if (names.length<=6) {

//         //  here we have place dollar with names because "names" is variable 
//       document.body.innerHTML+= `${names} is innovator <br>`

//     }

//     else if (names.length>=8) {
//            document.body.innerHTML+= `${names} is creator <br>`

//     }
//     else if (names.length>6 && names.length<=7) {
//         document.body.innerHTML+= `${names} is leader <br>`
//     }
// }


let arr = [2, 3, 2, 4, 5]

//  creating seen to check further whether its key pairs have the elements contained in arr or not 
let seen = {}

let doublearray = []

function randomdelay() {
   return Math.random() > 0.5
}


for (const elements of arr) {

   //   here mapping of arr is done to create a new array with the help of operations performed on elements 


   //   return arr.map(elements=>elements*2)


   // When we iterate through the array, we use the elements of the array as keys in the seen{} object
   if (!seen[elements]) {
      doublearray.push(elements * 2)

      //   marks this number as seen and confirms the existence of it in the seen object 
      seen[elements] = true
   }
   //  we are operating random function here because this is the only section where repeating elements in arr is called 
   else {
      if (randomdelay()) {
         doublearray.push(elements * 2)
      }
      else {
         doublearray.push(elements)
      }
   }

}

console.log(doublearray);


let str1 = "rishit"

//  we have to add inverted commans to brakets to show that operations are performed in a string 
let str2 = str1.split("").reverse("").join("")
console.log(str2);

function call() {

   //  since strings are immutable you cannot directly add elements to it through append but you can use 
   //    "+" operator instead for adding or by wriitng concat ( concatination method )

   return str1 + str2

   return str1.concat(str2)
}
console.log(call());


//  let pass=prompt("enter a password")

// function uppercase() {
//    let upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
//    return upper[Math.floor(Math.random()*upper.length)]

// }

// function lowercase() {
//    let lower= "abcdefghijklmnopqrstuvwxyz".split('')
//    return lower[Math.floor(Math.random()*lower.length)]

// }  

// function specialcharacter() {
//    let special= "#@&".split('')
//    return special[Math.floor(Math.random()*special.length)]
// }

// function number() {
//    return  Math.floor[Math.random()*10]
// }

// let str3=  uppercase() + lowercase() + specialcharacter() +number()

//    // return str3 + uppercase() + lowercase() + specialcharacter() +number()

// // password()
// if (pass===str3) {
//    alert("your password is: +pass")
// }

// else{
//    alert("your set password is wrong enter another password")
// }






// let add=0

// function sum() {

//    if (condition) {

//    }
//    for (let i = 0; i < arr2.length; i++) {
//       add+=arr2[i] 

//     }
//    return add
//    }

// let arr2=[]

// for (let j = 1; j < 5; j++) {
//  let element=prompt("enter the numbers") 
//   //  number is putten before element so that it is pushed in our array in the form of number 
//  arr2.push(Number(element)) 
// }

// let add=0;
// let allpos=false;
// function sum() {
//    arr2.forEach(element => {
//       if (element>0) {
//         add+=+element 
//         allpos=true;
//         return add
//       }
//       if(!allpos){
//          console.log("addition is not possible");

//       }
//    });
// }


// chatpgtcode
// console.log(sum());

// let arr2 = [];

// for (let j = 1; j < 5; j++) {
//   let element = prompt("Enter the numbers");
//   arr2.push(Number(element)); // Convert input to a number
// }

// let add = 0;
// function sum() {
//   let allPositive = true;

//   arr2.forEach(element => {
//     if (element > 0) {
//       add += element;
//     } else {
//       allPositive = false;
//     }
//   });

//   if (!allPositive) {
//     console.log("Addition is not possible");
//   } else {
//     return add;
//   }
// }

// console.log(sum());

let arr3 = "codewithharry"

function vowels() {

   //  split is used to convert the string into array and access its elements 
   let vow = "aeiou".split('')
   return vow

}

//  getting the vowel array
let vowelist = vowels()

//  flag to check whether at this point any vowel is found or not 
let foundvowels = false

for (let i = 0; i < arr3.length; i++) {

   //    genrally functions are not used inside a "if" statement but we prefer a variable instead of function inside "if"
   if (vowelist.includes(arr3[i])) {

      //  here arr3[i] is changing that's why we have put it into a template literal 
      console.log(`${arr3[i]} is a vowel`);
      //  marks that all vowels have been found 
      foundvowels = true

   }

   //  The reason the else statement ("no vowel") is repeating in your output is that the code checks each character in arr3 one by one. If a character is not a vowel, the else block will be executed for that character.
   //   else{
   //      console.log("no vowel ");
   //    }

   //  correct method 
   if (!foundvowels) {
      console.log("no vowels found");

   }

}


async function prom() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(45)
      }, 5000);
   }).then(resolve => {
      let arr5 = []

      for (let i = 1; i < 5; i++) {
         let num = prompt("enter array elements")
         arr5.push(Numbers(num))
      }

      //  we cannot use map() inside foreach loop because forecach loop is itself used for operating all elements inside the array and map() is also havig the same function so it is prefered to use only one at a time 

      //  this will return a array 
      let element
      return arr5.map(element => element * 2)
   });

}
// let arr5=[7,8,9,6]
async function oldarr() {
   // let arr5=[7,8,9,6]
   let newarr = await prom()
   console.log(newarr);

}
oldarr()

async function brewcoffe() {

   let rand = parseInt(0 + Math.random() * 7)
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(45)
      }, rand * 1000);
   }).then(resolve => {
      console.log("your coffee is ready");

   })
}

async function main() {
   console.log("your coffee is ready to prepare");
   let coffee = await brewcoffe()
   // console.log("your coffee is ready");


}

main()

// function items() {
//    //  let item={
//    //    // bag:400,
//    //    // copy:20,
//    //    // phone:20000,
//    //    // car:2000000,
//    // {
//    //    bagqt:2,

//    // } 

//    // } 


//    let materials = [
//       { itemmame: "bag", price: 500, quantity: 2 },
//       { itemname: "copy", price: 20, quantity: 5 },
//       { itemname: "phone", price: 20000, quantity: 2 },
//       { itemname: "car", price: 2000000, quantity: 4 },
//    ]


//    //  let array=[] 

//    // //  forof loops is used for iteration of strings and array but item is a object thus we are getting error

//    // //  const value of ("") this should be a iterable thing like strings and arrays and object.values(item) is used to convert object into array and it is a generalised way 
//    // for (const value of Object.values(item)) {
//    //    array.push(value)
//    // }

//    // console.log(array);

//    console.log(materials);
// }

// items()


// function sum(price, quantity) {
//    return price * quantity
// }

// function cost() {
//    let rand = Math.floor(Math.random() * 9)

//    if (materials[quantity] == rand) {
//       console.log("the cost is:", sum());

//    }

// }
// cost()
// sum()




//  now our array[object]  that is material is globally accesable 

let  materials = [
   { itemname: "bag", price: 500, quantity: 2 },
   { itemname: "copy", price: 20, quantity: 5 },
   { itemname: "phone", price: 20000, quantity: 2 },
   { itemname: "car", price: 2000000, quantity: 4 },
]


//  fetches the material array 
function items() {
  console.log(materials);
}

items()


function sum(price, quantity) {
   return price*quantity
}

function cost() {
   let rand = Math.floor(Math.random()*9)


   //  for working regarding any items inside an array you first needd to initialise a for loop inside which all your activities is going to be be done
    for (let i = 0; i < materials.length; i++) {
      //  storing all items of materials in a local variable(product) such that we can use it in function ahead by (product.anything we want from array) 
      let  product  = materials[i];
      
      //  dont give any space between lhs and rhs of "=="
      if (product.quantity==rand) {
         console.log("the cost is:",sum(product.price,product.quantity));
   }

   }

}
cost()



 
let itemlist=[
   {Rangeabove20k:"oppo ,vivo, redmi",Storage:"128gb",spekear:"single",ram:"6gb"},
   {Rangeabove30k:"samsung,nothing,goggle,oneplus",Storage:"256gb",speaker:"dual",ram:"8gb"},
   {Rangeabove40k:"foldphones,ipad,iphone",Storage:"384gb",speaker:"triple",ram:"16gb"}
]
function getitemlist() {
   console.log(itemlist);
   
}

let product=getitemlist()


function getinput() {
   let criteria = { Storage: "256gb", speaker: "dual" };
   return criteria
}

criteria=getinput()

function filterproduct() {
  
   //  here now we are returning the main array that is itemlist with some filters with the help of itemlist.filter("what we want to filter is placed here") 

   //  filter returns a new array with all elements that passes the test given in the function 
   return itemlist.filter(product=>{
  
      //  because we have to take criteria[key] for checking that's why we have placed a forin loop to iterate all elements inside criteria 
      for (const key in criteria) {

         // For each key, it compares the product's property value (product[key]) with the corresponding criteria value (criteria[key]).
          if (product[key]==criteria[key]) {
            
            // The callback function provided to .filter() is executed on every element in the array.
            //  if the callback returns true the element filtered is included in the new array 
            // Returning true tells .filter() to include this product in the resulting array.
            return true;
         }
      
        else{
         return false
      }
      
      }
   }
   

   )
}
  console.log( filterproduct());



















