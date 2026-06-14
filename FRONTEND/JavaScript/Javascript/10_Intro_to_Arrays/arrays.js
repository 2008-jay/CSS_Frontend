// ################## Intro to Arrays ####################

// Arrays is Reference Type.
// Array is ordered collection of data or items.
//---------------------------------------------------------------

// How to create Arrays.
//---------------------------------------------------------------
// Numbers Array

let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// String array

let names = ["Jay","aniket","Darshan"];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


// In array you can store multiple datatype at once.

 let mixed = [1,2,3.14,"Jay",null,undefined];
 console.log(mixed);

 // Arrays are mutable we can change certain data
// with the help of array indexing

let fruits = ["Mango","Apple","Grapes"];
console.log(fruits);

fruits[1] = "Banana";
console.log(fruits);
