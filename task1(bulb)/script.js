const mySwitch = document.querySelector(".switch");
const bulb = document.querySelector(".circle");
const myMain = document.querySelector(".main");
const switchon = document.querySelector(".switchon");

let flag = 1;
mySwitch.addEventListener("click", ()=>{
    if (flag == 1) {
        bulb.style.backgroundColor = "black";
        mySwitch.textContent = "ON";
        myMain.style.backgroundColor = "#555";
        
        
        flag = 0;
    }
    else {
        bulb.style.backgroundColor = "yellow";
        mySwitch.textContent = "OFF";
        myMain.style.backgroundColor = "rgb(190, 190, 190)";
        

        flag = 1;
    }
        
})

onclick = ()=>{
    switchon.classList.toggle("active")
};