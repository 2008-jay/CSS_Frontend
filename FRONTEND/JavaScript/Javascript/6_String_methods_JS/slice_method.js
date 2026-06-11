
let str = "Helloworld";
let newstr = str.slice(0,5);

// 0 1 2 3 4 index values will be returned
// will iterate from 0 to <5 and slice from str to newstr
console.log(newstr); //hello


let newstr2 = str.slice(4);
console.log(newstr2);

// here from 4th index to end of string will be returned and sliced

// will iterate from 4th to last index
