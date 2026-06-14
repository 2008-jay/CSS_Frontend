// for loop in array

let fruits = ["Mango","Apple","Grapes"];
console.log(fruits);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// use const for creating array

// const pi=3.14;
// // pi=233; // assign to const var error
// console.log(pi);

const num=[1,2,3,4];
// we are making changes at heap here by num addressing push
// method to num.
num.push(5,6,7);
console.log(num);
