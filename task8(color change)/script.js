let btns = document.querySelectorAll("button")
let body = document.querySelector("body")

btns.forEach(function(elem){
    elem.addEventListener("click", function(){
        color = elem.innerHTML;
        body.style.backgroundColor = color;
        
    });
    
})

