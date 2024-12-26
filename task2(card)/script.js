const img = document.querySelector("img");
const h4 = document.querySelector("h4");
const button = document.querySelector("button");

let flag = 0;

button.addEventListener("click", () => {
  h4.innerHTML = "Request Sending...";
  button.innerHTML = "Adding Friend ";
  h4.style.color = "orange";
  img.style.border = "3px solid orange";
  if (flag == 0) {
    setTimeout(() => {
      img.style.border = "3px solid green";
      h4.style.color = "green";
      h4.textContent = "Friend";
      button.textContent = "Remove Friend ";
      flag = 1;
    }, 3000);
  } else {
    img.style.border = "3px solid red";
    h4.style.color = "red";
    h4.textContent = "Stranger";
    button.textContent = "Add Friend ";
    flag = 0;
  }
});
