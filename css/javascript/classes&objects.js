// let obj={
//     a:"harry",
//     b:"rishit"
// }

// console.log(obj);

// let animal={
//     eat:"hero"
// }

// let human ={
//     good:"all"
// }

// //  it sets one of the protoype of human as animal 
// //  prototype is certain additional properties in an object 
// human.__proto__=animal; 

// //  but prototype is a basic understanding of working of objects oriented programming but for clear knowledge we have proper study with the help of "classes" in js

// class Animal  {

//     //  basically you can pass arguments inside constructor 
//     constructor(name) {
//         //  in constructor we can add differcent types of properties with the help of "this"
//         this.name=name
//     //    or 
//     //     this.name= "rishit"
//         console.log("i am introduction to classes");

        
//     }
 
//     //  we cannot use function directly in our class but we can write as important() that is only classname ()
//     eats() {
//       console.log(" hey i am new eater ");
           
//     }

//     drink(){
//         console.log(" i am drinking water");
        
//     }
    
// }

// class lion extends Animal{
// //     by default it takes the inheritance propety also if we dont put anything in the constructor  as we have extended it with animal so argument name is bydefualt taken 
// constructor(name){
   
//     //  because you have extended animal you have to call its constuctor by "super()" before giving operations in new constructor 
//     super(name) 
//    this.name=name
//    console.log("hey i am new lion object");
   
// }

// //  this is called overwriting 
// eats() {

//     // here this super will print eats for animal also 
//     super.eats()
//     console.log(" hey i am another new eater ");

// //  output 
// //     l.eats()
// // classes&objects.js:37  hey i am new eater 
// // classes&objects.js:64  hey i am another new eate
         
//   }



// }
// //  syntax to create a new ojbect is defined as below 
// let a= new Animal("harry");
// console.log(a);

// let l = new lion("shera")
// console.log(l);

//  getters and setters 

// class user {
//     constructor(name) {
//         this.name=name 
//     }

// get name(){
//     return this._name;
// }

// set name(value){
//     if (value.length<4) {
//         console.log("your word is too short");
//        return;        
//     }

//   this._name =value;

// }


// }

// //  this will call get name 
// let user=new user("sam");
// console.log(user.name);

// //  if we are again setting  property of a user it will call set function
// user= new user("");
// console.log(user);
class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    //  this get name is used  to fetch the value of name
  get name(){
    return this._name
  }
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }

    //   else{
    //     return value;
    //   }
      
    //    this statement just tells us the value of  argument (value)
        this._name = value;
    
        
    //   this._name = value;
    }
  
  }
//    here basically user is converted to an object 
  let u = new User("John");
  console.log(u.name); // John
  
//   if we are again setting the propertis of user it will call set function 

//  set function basically sets new value that we have given if our setfunction doesnot works 

//  u.name = ("rohan") 
//  console.log(u.name)
// // output 
// // rohan 

//  u.name = ("roh") // Name is too short.
//  console.log(u.name)
 
// // output 
// // name is too short 
// // john 

//  u.name = ("rohan") // Name is too short.
// console.log(u)

// // output
// // User {_name: 'rohan'}


// u.name = ("roh") // Name is too short.

// // output 
// // name is too short 











