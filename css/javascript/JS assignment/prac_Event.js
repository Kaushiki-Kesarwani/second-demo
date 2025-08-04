let mode=document.querySelector("#mode");

let currMode="Light";
mode.addEventListener("click",()=>{
    console.log("you are trying to change mode.");
    if(currMode==="Light"){
       currMode="Dark"
       document.querySelector("body").style.backgroundColor="black";
    }
    else{
         currMode="Light"
         document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
})