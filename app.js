const fetch = require("node-fetch");
// Function to fetch weather data
async function getWeatherData(city) {
  const apiKey = "YOUR_API_KEY";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}
// Example usage
getWeatherData("Mumbai")
  .then((data) => {
    console.log(data); // Display the weather data for Mumbai
  })
  .catch((error) => {
    console.error(error);
  });

  const options = {method: 'GET'};

fetch('https://api.tomorrow.io/v4?apikey=WNq00sP7AjkZOhzd7vRpSChH1DlCpWjV', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));