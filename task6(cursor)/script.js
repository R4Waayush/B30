let crsr = document.querySelector(".cursor");
let h1 = document.querySelector("h1")

document.addEventListener("mousemove", function(dets){

    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    
})

h1.addEventListener("mouseenter", function(){
    crsr.style.scale = 3
})

h1.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
})