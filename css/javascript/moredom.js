console.log("hey this is harry");

console.log(document.body);


//  childnodes returns all the children inside it that means its content 

//  it returns all the contents of the body 
console.log(document.body.childNodes);

//  gets first element of the body 
console.log(document.body.childNodes[0]);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].firstChild);

//  for finding first element child that is div.box we have to put a sperate function that is 'cont' to document.body.childnodes[1]
// let cont = "document.body.childNodes[1]";

// console.log(cont.firstElementChild);

console.log(document.body.firstElementChild);

console.log(document.body.firstElementChild);

//  next  sibling usage 
console.log(document.body.firstElementChild.children[3].nextSibling);

//  for next element sibling
console.log(document.body.firstElementChild.children[3].nextElementSibling);
 

//  another way for accesing only elements in a document 
console.log(document.body.firstElementChild.children);



console.log(document.body.firstElementChild.childNodes);

console.log(document.body.children[1]);

console.log(document.body.children[1].rows);











