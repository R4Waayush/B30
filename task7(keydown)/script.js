img = document.querySelector("img")
let moveY = 0
let moveX = 0

document.addEventListener('keydown',function(dets){
    
    if(dets.code=="ArrowDown" && moveY<100){
        moveY++;
        img.style.top = moveY+"%"
        
    }
    else if(dets.code=="ArrowUp" && moveY>0){
        moveY--;
        img.style.top = moveY+"%"
    }
    else if(dets.code=="ArrowRight"&& moveX<100){
        moveX++;
        img.style.left = moveX+"%"
    
    }
    else if(dets.code=="ArrowLeft"&& moveX>0){
        moveX--;
        img.style.left = moveX+"%"                           

    }
    else{
        console.log("other key pressed");
        
    }
})