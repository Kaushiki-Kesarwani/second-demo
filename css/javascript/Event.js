let btn=document.querySelector(".divs");
btn.onclick=()=>{
   
    console.log("button was clicked");
    let name=prompt("Enter a number:");
    alert("Hello " + name);
}

btn.onmouseover=(evt)=>{
    console.log(evt.type);
    console.log(evt.target);
       console.log(evt.clientX,evt.clientY);
}