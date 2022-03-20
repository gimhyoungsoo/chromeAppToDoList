const clock = document.getElementById('clock')

// setInterval
// setTimeout

function setClock(){
    clock.innerText = ''
    const date = new Date()
    const hour = date.getHours().toString().padStart(2,'0')
    const min = date.getMinutes().toString().padStart(2,'0')
    const sec = date.getSeconds().toString().padStart(2,'0')

    clock.innerText = `${hour}:${min}:${sec}`
    
}
setClock()
setInterval(setClock,1000)

