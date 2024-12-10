const body1=document.querySelector("body");
body1.addEventListener("mousemove",(event)=>{
    const one=event.offsetX;
    const two=event.offsetY;
    const span1=document.createElement("span");
    span1.style.left=one+"px";
    span1.style.top=two+"px";
    const size=Math.random()*100;
    span1.style.width=size+"px";
    span1.style.height=size+"px";
    body1.appendChild(span1);
    setTimeout(() =>{
        span1.remove();
    },3000);
});