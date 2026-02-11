import "./styles.css";

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
  const currentWeather = data.currentConditions.temp;
  temperatureDisplay.innerText = `${currentWeather}°F`;
  console.log(currentWeather);
}

getWeather();
