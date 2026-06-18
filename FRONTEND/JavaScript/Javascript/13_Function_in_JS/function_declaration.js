
//################# Function in JavaScript ############### 

// #############  Basics OF Function ###########
// All Below Are Function Declaration

// Printing data 
// Not convenient to print this way 

console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

// So We can make function and just call its function
// Declaration of function:
function printText(){
    console.log("This is console Text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();


// ###################################################################
/*
function addition(){
    return 2+4;
}
const result = addition();
console.log(result);
*/
// ###################################################################

function addition(num1,num2){
    return num1+num2;
}

const result = addition(3,4);
console.log(result);


function additionofthree(num1,num2,num3){
    return num1+num2+num3;
}

// const sum = additionofthree(10,20);  output is NaN
const sum = additionofthree(10,20,30);
console.log(sum);

// ------------------------------------------------
  
  // odd or Even 

  function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
  }

  console.log(isEven(6));

    // ------------------------------------------------

    function firstchar(str){
        return str[0];
    }
    console.log(firstchar("Jay"));

    // Create function
  // input : array , target(number)
  // output : index of target present in array
  // linear Search

  function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
  }

  const arr =[1,2,3,4,5,6,7,8,9,10];
  const res = linearSearch(arr,10);
  console.log(res);