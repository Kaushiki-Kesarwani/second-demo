/*Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

//Qs. Create an arrow function to perform the same task.

const vow = (str)=>{
let count=0;
for(let word of str){
if(word==='a'|| word==='e'||word==='i'||word==='o'||word==='u'){
    count++;
}
}
return count;
}

let countedvow=vow("Congratulations");
console.log(`There are ${countedvow} vowels in the string`);