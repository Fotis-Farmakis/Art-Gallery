

document.getElementById('headerBut1').addEventListener('click',() => {window.location.href='visit.htm'});

document.querySelector('.header h1').addEventListener('click',() => {window.location.href='home.htm'});

document.getElementById('headerBut2').addEventListener('click',() => {window.location.href='art.htm'});





let arr = ['picasso', 'pollock', 'gogh','hopper','goya','mone']

const art = document.getElementsByClassName("art")[0]

let imgs = document.createElement('div')
imgs.classList.add("exInner")

arr.forEach(element => {
    
    
    let ex = document.createElement("img");
    
    let cssText = "object-fit:contain; width: calc(100%/3); height: 20rem ;align-items: center ;flex: 1 0 25%;padding: 0.5rem;border: 2px solid grey;border-radius: 0.33rem";
    
    ex.style.cssText= cssText;
    ex.src = `../img/${element}.jpg`

   
    imgs.appendChild(ex)
});

art.appendChild(imgs)

