const apiKey = "af52400739bf91b36683721e573a70ce";

async function getWeather(){

const city = document.getElementById("city").value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);
const data = await response.json();

if(data.cod !== 200){

document.getElementById("result").innerHTML="City not found";
return;

}

const icon = data.weather[0].icon;

document.getElementById("result").innerHTML = `
<h2>${data.name}</h2>

<img class="weather-icon"
src="https://openweathermap.org/img/wn/${icon}@2x.png">

<p>🌡 Temperature: ${data.main.temp}°C</p>

<p>☁ Weather: ${data.weather[0].description}</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>💨 Wind: ${data.wind.speed} m/s</p>
`;

}

catch(error){

document.getElementById("result").innerHTML="Unable to fetch weather";

}

}

document.getElementById("city").addEventListener("keypress",function(e){

if(e.key==="Enter"){

getWeather();

}

});
