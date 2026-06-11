
let firstName = "Jay";
let age = 20;




// Both a or b condition should be true 
// to get if condition
// or else will run
if(firstName[0]==="J" && age>18){
    console.log("Name starts with J and above 18")
}
else{
    console.log("Not qualified");
}





// Atleast a or b condition should be true 
// atleast 1 should be true to get if condition
// or else will run
if(firstName[0]=== "J" || age<15){
    console.log("Name starts with J and above 18");
}else{
   console.log("not qualified");
}