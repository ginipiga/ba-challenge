const h = document.createElement("h2");
h.innerText="hello";
const body = document.body;
body.appendChild(h);
const BClist= body.classList;
BClist.add("yellow");
function resize(){
    const innerwidth = window.innerWidth;
    
    if(innerwidth<500){
        BClist.replace(BClist,"tomato");
    }else if(innerwidth<900)  {
        BClist.replace(BClist,"blue");
    }else if(innerwidth<1200){
        BClist.replace(BClist,"green");
    }else{
        BClist.replace(BClist,"greenyello");
    }
}
window.addEventListener("resize",resize);

