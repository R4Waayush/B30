button = document.querySelector('button')
img1 = document.querySelector('.img1');
img2 = document.querySelector('.img2');

button.addEventListener('click', ()=> {
    
    let img1src= img1.getAttribute('src')
    let img2src= img2.getAttribute('src')

        console.log(img1src);
        
    img1.setAttribute('src', img2src)
    img2.setAttribute('src', img1src)
    
    
})