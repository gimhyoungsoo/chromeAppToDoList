const  images = ['ecology.png', 'multimedia.png', 'technology.png']
const chosenImg = images[Math.floor(Math.random() * images.length)]

const imgTag = document.createElement('img')
imgTag.id = 'img'
imgTag.src = `img/${chosenImg}`
document.body.appendChild(imgTag)