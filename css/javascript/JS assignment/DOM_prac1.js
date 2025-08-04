/* Qs. Create a H2 heading element with text - “Hello JavaScript”

. Append “from Apna College

students” to this text using JS. */
// let h2=document.querySelector("h2");
// console.dir(h2);
// h2.innerText=h2.innerText+" from Apna College students. ";
// console.dir(h2);



/*Qs. Create 3 divs with common class name - “box”

. Access them & add some unique text to each

of them.*/

let box=document.querySelectorAll(".box");

let idx=1;
for(boxes of box){
    boxes.innerText=`new unique value ${idx}`;
    idx++;
}
