const box = document.querySelector('.box');
const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  let a1 = Math.floor(Math.random() *255)
  let b1 = Math.floor(Math.random() *255)
  let c1 = Math.floor(Math.random() *255)

//   console.log(a1,b1,c1)
  let r1 = Math.floor(Math.random() *100)
  let r2 = Math.floor(Math.random() *100)
    box.style.backgroundColor = `rgb(${a1},${b1},${c1})`
    body.style.backgroundColor = `rgb(${c1},${a1},${b1})`
    box.style.borderRadius = `${r1}px ${r2}px`
});