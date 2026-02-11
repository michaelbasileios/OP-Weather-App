import "./styles.css";

async function getWeather(location = "London") {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=24N7WG5T3Y8VAWC8BV7HSMSPG`,
  );
  const data = response.json();
  console.log(data);
}

getWeather();
