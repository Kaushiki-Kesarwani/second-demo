let prices=[250,645,300,900,50];

let idx=0;
for(let val of prices){
console.log(`Before applying 10% offer at index ${idx} = ${val}`);
idx++;
}

console.log('\n');

for(let i=0;i<prices.length;i++){
let offer=prices[i]/10;
prices[i]=prices[i]-offer;  
 
}
idx=0;
for(let val of prices){
    console.log(`After applying 10% offer at index ${idx} = ${val}`);
    idx++;
    }


