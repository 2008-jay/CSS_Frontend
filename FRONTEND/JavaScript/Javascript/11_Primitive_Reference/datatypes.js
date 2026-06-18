// primitive Vs Reference data type.

// Primitive Type :
let num1 = 6;
let num2 = num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

num1++;

console.log("after incrementing");

console.log("value of num1 is",num1);
console.log("value of num2 is",num2);


// reference Type :


// Array

let arr1 = ["item1","item2"];
let arr2 = arr1;


console.log("array 1",arr1);
console.log("array 2",arr2);

arr1.push("item3");

console.log("after pushing new item");

console.log("array 1",arr1);
console.log("array 2",arr2);

/*
1. Primitive Data Types

Primitive data types store the actual value directly in the variable.

Types of Primitive Data Types
Number
String
Boolean
Undefined
Null
BigInt
Symbol


1. Primitive Data Types

Primitive data types store the actual value directly in the variable.

Types of Primitive Data Types
Number
String
Boolean
Undefined
Null
BigInt
Symbol
*/

/*

https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/

*/