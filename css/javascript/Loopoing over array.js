let heroes = ["ironman", "thor", "hulk", "spiderman"]

for (let hero of heroes) {//for - of loop
  console.log(hero)
}

console.log('\n');

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
console.log('\n');

let k=0;
while(k<heroes.length){
    console.log(heroes[k]);
    k++;
}
