//count the vowels

let str="orange";
let vow_count=0;

for(let vowels of str){
    if(vowels==='a' || vowels==='e'|| vowels==='i' || vowels==='o' || vowels==='u'){
        vow_count++;
    }
}
console.log(`There are ${vow_count} vowels`);