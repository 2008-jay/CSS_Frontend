let total = 0;
let num = 50;
let i = 0;
for(i=0;i<=50;i++){
    total = total + i;
    i++;
}

console.log(total);



// break and continue keywords

for(let j=0;j<=9;j++){
   if (j==5){
        break;
    }
    console.log(j);
}


for(let j=0;j<=9;j++){
    if(j==5){
        continue;
    }
    console.log(j);
}