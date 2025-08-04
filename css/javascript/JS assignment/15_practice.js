/*Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.*/

let n = prompt("Enter a number n:");
let num=[];
for(let i=1;i<=n;i++){
 num[i-1]=i;
}
console.log(num);

let result=num.reduce((res,curr)=>{
    return res+curr;
    
}
)
console.log("Sum=",result);

let new_res=num.reduce((res,curr)=>{
    return res*curr;

})
console.log("factorial=",new_res);