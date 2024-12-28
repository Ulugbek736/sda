const API_key = "38acf15f4def0de72045ad6c7505cfd5";
const lat = 41;
const lon = 60;

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    // Olingan ma'lumotlarni ajratib oling
    const { name } = data;
    const { temp } = data.main;
    const { description } = data.weather[0];
    const { lat, lon } = data.coord;

    // HTML elementlarini yangilash
    document.querySelector('.city-name').textContent = `City: ${name}`;
    document.querySelector('.degree').textContent = `Temperature: ${temp}°C`;
    document.querySelector('.weather-info').textContent = `Weather: ${description}`;
    document.querySelector('.coordinates').textContent = `Coordinates: ${lat}, ${lon}`;
  })
  .catch((error) => {
    console.error('Error:', error);
    alert("Failed to fetch weather data. Please try again.");
  });
