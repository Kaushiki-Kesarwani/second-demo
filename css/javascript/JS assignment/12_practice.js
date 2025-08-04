/*Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

function vowels(word){
    let countvow=0;
    for(let w of word){
    if(w==='a'|| w==='e'|| w==='i'|| w==='o'|| w==='u'){
        countvow++;
    }
}
    return countvow;
}

let countedvow=vowels("Beautiful");
console.log(`Vowels = ${countedvow}`);