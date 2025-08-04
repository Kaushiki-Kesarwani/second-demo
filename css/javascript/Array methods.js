//push
let fruits=["Banana","Apple","Pear","Avocado","Pineapple"];

fruits.push("Mango","Grapes");
console.log("New fruits List:" ,fruits);

//Pop
fruits.pop();
console.log("fruits List: ",fruits);

 
console.log('\n');

//to string
console.log(fruits.toString());//returns new string does not make chages on ori. array

//concat
let vegtable=["Potatoes","Tomatoes","onion","garlic"];
let salad=["cucumber","carrot",];
console.log(vegtable.concat(salad));

console.log(vegtable);
console.log(salad);

//unshift
salad.unshift("Beetroot");
console.log(salad);

//shift
let dele=salad.shift();
console.log(salad);
console.log('Deleted item = ',dele);

//slice
console.log(vegtable.slice(1,3));

//splice
let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,203);
//delete
let deleted=arr.splice(1,2);
console.log('Deleted = ',deleted);