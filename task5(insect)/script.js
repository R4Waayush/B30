let button = document.querySelector('button');
let body = document.querySelector('body');

const images = ["https://e7.pngegg.com/pngimages/999/580/png-clipart-arvind-kejriwal-delhi-chief-minister-siwani-aam-aadmi-party-others-miscellaneous-india.png",
"https://en.wikiflux.org/wiki/images/b/b4/Narendra_modi.png",

]

button.addEventListener('click',()=>{
    
    let valueX = Math.random()*100
    let valueY = Math.random()*100

    
    

    let img = document.createElement('img');
    img.setAttribute('src',"")

    img.style.height = "200px";
    img.style.position = "absolute";
    img.style.top = valueX + "%"
    img.style.left = valueY + "%"
    
    body.appendChild(img);


})
