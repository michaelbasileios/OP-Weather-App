import "./styles.css";

const img = document.querySelector("img");
const temperatureDisplay = document.querySelector("h1");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(form.location.value);
  form.reset();
});

async function getWeather(location = "London") {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=24N7WG5T3Y8VAWC8BV7HSMSPG`,
  );
  const data = await response.json();
  const currentLocation = data.address;
  const currentWeather = data.currentConditions.temp;
  const weatherIcon = data.currentConditions.icon;
  img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${weatherIcon}.svg`;
  temperatureDisplay.innerText = `${currentLocation}: ${currentWeather}°F`;
  console.log(currentWeather);
  console.log(data);
}

getWeather();
