let para=document.querySelector("p");

console.log(para);

let id = para.getAttribute("id");

console.log(id);


let heading=document.querySelector("h6");
 
console.log(heading);

let cla = heading.setAttribute("class","newclass");

console.log(cla);


let decor=document.querySelector("body");

let colors=decor.style.backgroundColor="#B5AA9D";

console.log(colors);

let div=document.querySelector(".div");

div.style.backgroundColor="#BA324F"
div.style.borderColor ="#626D58";

console.log(div);

//Insert element

let newEl=document.createElement("h1");
newEl.innerHTML="<i>Hi! How can i help u.</i>";
document.querySelector("div").before(newEl);
newEl.style.textAlign="center";
newEl.style.color="#945D5E";

let btn=document.createElement("button");
btn.innerHTML="press";
document.querySelector(".div").append(btn);
btn.style.backgroundColor="#61988E";


let par=document.querySelector(".div");
console.log(par.firstChild);
console.log("first element : ",par.firstElementChild);