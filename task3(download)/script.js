let button = document.querySelector("button")
let h1 = document.querySelector("h1");
let growth = document.querySelector(".growth")
let grow = 0

button.addEventListener("click", function() {
  let growthInterval = setInterval(() => {
    grow++;
    h1.innerHTML = grow + "%"
    growth.style.width = grow + "%"
    button.innerHTML = "Downloading"
  }, 50);
  
  setTimeout(() => {
    clearInterval(growthInterval)
    button.style.pointerEvents = "none"
    button.style.opacity = "0.8"
    button.innerHTML = "Downloaded"
    
  }, 5000);
  
})