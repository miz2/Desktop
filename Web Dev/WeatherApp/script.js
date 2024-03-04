const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather? q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// no need of keys of the api

// selectors for various applications
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

// use async -await while fetching api
const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    console.log(response)
    // only json data is needed 
    const data = await response.json()
    return showWeather(data)
}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
    <div class="weather-info">
    
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
<h2>Weather in ${data.name}</h2>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main} </h4>
</div>
    `
}
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        // avoids reloading of the form
        event.preventDefault();
    }
)

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const city = search.value;
    getWeather(city);
});