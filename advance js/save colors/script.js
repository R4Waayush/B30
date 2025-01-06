let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let saved = document.querySelector(".saved");
let flag = false;
let a1, b1, c1; 
const colors = [];

saved.addEventListener("click", function(dets){
  saved.removeChild(dets.target);
  colors.splice(colors.indexOf(dets.target.style.backgroundColor),1);
  console.log(colors);
  
  
  flag = true;
})
box.addEventListener("click", function () {
  if (flag && colors.indexOf(`rgb(${a1}, ${b1}, ${c1})`)===-1) {
    div = document.createElement("div");
    div.classList.add("col");
    div.style.backgroundColor = `rgb(${a1}, ${b1}, ${c1})`;
    saved.appendChild(div);
    colors.push(`rgb(${a1}, ${b1}, ${c1})`)
    console.log(colors);
    
  }
});

btn.addEventListener("click", function () {
  a1 = Math.floor(Math.random() * 256);
  b1 = Math.floor(Math.random() * 256);
  c1 = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${a1}, ${b1}, ${c1})`;
  flag = true;
});

