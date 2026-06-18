//################# Function in JavaScript ############### 
/*
Arrow function {()=>} is concise way of writing Javascript 
functions in shorter way. Arrow functions were introduced 
in the ES6 version. They make our code more structured and 
readable.

*/
// #############  Basics OF Function ###########
// All Below Are Arrow Function 

// Printing data 
// Not convenient to print this way 

console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");



// So We can make function and just call its function
// Declaration of Arrow function :

const printText = ()=>{
    console.log("This is console Text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();

// ###################################################################
// Function Expression 
// we initialize const variable to function
// so addition here expresses function


const addition = ()=>{
    return 2+4;
}

const result = addition();
console.log(result);

 // ###################################################################

 const add = (num1,num2) =>{
    return num1+num2;
 }
 const sum = add(10,20);
 console.log(sum);


  // odd or Even 
    
    const isEven=  (num) =>{
      if(num % 2 === 0){
            return true;
        }
        return false;
    }

    console.log(isEven(2));
// #####################################################################

    const firstChar = (str)=>{
        return str[0];
    }
    
    console.log(firstChar("abcdef"));

// ------------------------------------------------
    
    // Create function
    // input : array , target(number)
    // output : index of target present in array
    // linear Search
    
   const linearSearch = (arr,target) => {
        
        for(let i=0;i<arr.length; i++){
            if(arr[i]===target){
                return i;
            }
        }
        return -1;
    }
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const res = linearSearch(arr,10);
    console.log(res);