const apiKey = "23c1f08b85f89e362d54298271b6448d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const box = document.querySelector(".input")
const btn = document.querySelector(".sub")
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json()
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";

    if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    }
}
btn.addEventListener("click", () => {
    checkWeather(box.value);
})