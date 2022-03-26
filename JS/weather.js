const WEATHER_API_KEY = '29463255aa4d9f460e1c97e3141373e0'

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    const weatherInfo = fetch(url).then(response => response.json()).then(data => {
        const cityHTML = document.body.querySelector('#weather span:first-child')
        const weatherHTML = document.body.querySelector('#weather span:last-child')

        cityHTML.innerText = data.name;
        weatherHTML.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`
    })
}

function onGeoError() {
    alert("Can't find where you are. weather service falied")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)