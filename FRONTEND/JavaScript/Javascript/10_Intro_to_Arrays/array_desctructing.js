/* Array Destructuring is a JavaScript feature that allows you to extract values from an array and store 
them into separate variables in a simple way.*/

// Basic Destructing Array

// const myarr = ["value1","value2"];

// let var1 = myarr[0];
// let var2 = myarr[1];

// console.log(var1);
// console.log(var2);


// Other way of Destructing Array in JS.

// const arr = ["value3","value4"];

// let [var3,var4] = arr;

// console.log(var3);
// console.log(var4);


// In case of let var destructuring

// const arr1 = ["value1","value2"];
// let [var1,var2]=arr1;
// var1 = "changevalue";
// console.log(var1);
// console.log(var2);


// In case of Const var destructuring

// const arr2 = ["value1","value2"];

// const [var1,var2] = arr2;  // cannot change const var acts similar to normal var
// var1 = "change";
// console.log(var1);
// console.log(var2);

// ##################### Cases ########################

// case 1

// const myarr = ["value1","value2","value3"];

// const[var1,var2]=myarr;
// // var1 ="changing value"; 
// // cannot change const var acts similar to normal var

// // Array is Destructed and stored in variables
// // and variable act similar to normal var
// console.log(var1);
// console.log(var2);

// case 2 

// const myarr = ["value1"];

// const [var1,var2,var3]= myarr;

// console.log(var1);
// console.log(var2);
// console.log(var3);

// case 3

// const myarr = ["value1","value2","value3","value4","value5"];

// Skipping value 2 and value 4 for assigning
// const [var1,,var2,,var3]=myarr;

// console.log(var1);
// console.log(var2);
// console.log(var3);



/*
// you want to store rest remaining values in array
const myarr = ["value1","value2","value3","value4","value5"];
const [var1,var2,var3]=myarr;

const newarr = myarr.slice(3);
console.log(var1);
console.log(var2);
console.log(var3);

console.log(newarr);
*/

// Other way to store rest remaining values in array

const myarr = ["value1","value2","value3","value4","value5","value6","value7","value8"];

const [var1,var2,var3,...newarr] = myarr;

console.log(var1);
console.log(var2);
console.log(var3);

console.log(newarr);

