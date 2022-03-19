const title = document.createElement('h2')
title.innerHTML = '<p>This is dynamic web, bro :)'
document.body.appendChild(title)

const colorbase = 'titleBase'
const colorchange = 'titleClicked'
title.classList.add(colorbase)

function OnTitleClick(){
    
    title.classList.toggle(colorbase)   
    title.classList.toggle(colorchange)   
}

title.addEventListener('click',OnTitleClick)