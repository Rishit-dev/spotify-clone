let arr=[1,2,3,4]

// arrays are mutable data type that means we can change its original value 
arr[0]=455;

console.log(arr);
console.log(arr.length);
console.log(arr[2]);

console.log(arr.toString());

//  with the help of this we can join arrays with some object this is (and ) here 
console.log(arr.join(" and "));

//  pops out last element from the array 
console.log(arr.pop());

console.log(arr.push("harry"));

let arr2=[1,2,3,4,5,6]

//  push helps in adding element at last 
console.log(arr2.push("harry"));
console.log(arr2);
//  removes first element from the array 
console.log(arr2.shift());
console.log(arr2);

//  unshift helps in adding element at first position in array 
console.log(arr2.unshift("jack"));
console.log(arr2);

//  delete creats a empty item at the place which is removed but the memory allocated to it will not change only its value will be empty 
delete arr2[6]
console.log(arr2);

//  length counts starts from 1 
console.log(arr2.length);

//  it will show error since that space is empty 
// console.log(arr2.a[6]);

//  adds 2 strings 
console.log(arr.concat(arr2));

let arr3=[9,5,8,6,1]

//  sort helps in arranging the array in incresing order
 
console.log(arr3.sort());

//  splice helps in removing elements from the array ( indexstart : no of elements to remove including the starting index number )
console.log(arr3.splice(1,2));
console.log(arr3);

let arr4=[1,2,3,4,5]

//  slice helps us to make new array from original array frame ( starting index : 1 less than ending index )
console.log(arr4.slice(1,3));





































