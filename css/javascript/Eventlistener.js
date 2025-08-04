let btn=document.querySelector("#hello");

btn.addEventListener("click",()=>{
    console.log("Button was clicked-handler1");
});
btn.addEventListener("click",(evt)=>{
    console.log("Button was clicked-handler2");
    console.log(evt);
}); 

const handler3=()=>{
    console.log("Button was clicked-handler3");
}

btn.addEventListener("click",handler3);

btn.addEventListener("click",()=>{
    console.log("Button was clicked-handler4");
});

btn.removeEventListener("click",handler3);