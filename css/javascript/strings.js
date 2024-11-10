console.log("this is string tutorial");
let a="harry";

//  Strings are immutable so no chages like this can occur 

// a[1]="M";

//  some properties related to strings are shown below 

console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

console.log(a.length);

//  when there are a lot of variables ,,template literals is created 
 let name="rahul";
 let real_name="rohan"

 console.log(" his name is "+ name+" and his friend name is "+ real_name +"");
 
//  instead of writing complex syntax which is written above we can use template literals like shown below 

// imp! when any variable is entered in this type of string(``) it is called string interpolation
  console.log(`his name is ${name} and his friend name is ${real_name}`);

//   what is escape sequence characters ?
//  like when a variable is assigned a value as a= "roh"an" it will not understand where the string is closing so we can give whole variable under(``) or /" after the word where we have to give break like `rohan` or "roh/"an" 

let b="shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

// slice means it will only shows letter within the given range from index no1 to index no 1 less than end index number therfore here letters from inde no 1 to 3 will be shown 
console.log(b.slice(1,4));

console.log(b.replace("sh","77"));
// but if there are 2 occurence of sh in the strings only the first occurence will get replaced by it 

console.log(b.concat(a));
//  for adding words with concatenation 
console.log(b.concat(a, "ronny","ram","shyam"));

//  used to remove white spaces 
let id ="aman"
let newid =id.trim()

//  strings are immutable we cannot change it once it is allocated a particular variable
console.log(b);
