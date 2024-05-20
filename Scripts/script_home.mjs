


document.getElementById('headerBut1').addEventListener('click',() => {window.location.href='visit.htm'});

document.querySelector('.header h1').addEventListener('click',() => {window.location.href='home.htm'});

document.getElementById('headerBut2').addEventListener('click',() => {window.location.href='art.htm'});

document.getElementById('headerBut4').addEventListener('click',() => {window.location.href='login.htm'});



let arr = ['picasso', 'pollock', 'gogh','hopper','goya','mone']

const exhibitions = document.getElementsByClassName("ex")[0]

arr.forEach(element => {
    

    let ex = document.createElement("div");

    ex.classList.add('exInner');
    
    let cssText = `background: url('../img/${element}.jpg') ;background-size:cover; flex: 0 0 50%;`;
    
    ex.style.cssText= cssText;
    


    // Create the paragraph element with the title and description
    const title = document.createElement('p');
    title.innerHTML=`<b>${element.toUpperCase()}</b><br>DESCRIPTION`
    title.style.color = "White"



    ex.appendChild(title);

    const divBut = document.createElement('div');
    divBut.classList.add('exButton');

    const but = document.createElement('button');
    but.classList.add('exButtonDetails');
    but.textContent = 'Details';

    divBut.appendChild(but);

    ex.appendChild(divBut);
    exhibitions.appendChild(ex)
});