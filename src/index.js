const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "1b3ffde3dfb107c54580add006ecd1e3";

const form = document.getElementById('weather-form');
form.addEventListener('submit', (e) => {
  const city = document.getElementById('city').value;
  getWeatherForCity(city).then(({ temp, weather, wind }) => {
    console.log(temp, weather, wind);
    displayWeatherInfo(temp, weather, wind, city);
  });
  e.preventDefault();
});

const getWeatherForCity = async (city) => {
  const params = `?q=${city}&units=metric&appid=${API_KEY}`;
  const url = API_ENDPOINT + params;
  const response = await fetch(url);
  const data = await response.json();
  const { main: temp, weather: [weather], wind } = data;
  return { temp, weather, wind };
};

const displayWeatherInfo = (temp, weather, wind, city) => {
  const div = document.getElementById('weather-info');
  div.innerHTML = '';

  const cityElement = document.createElement('h1');
  const icon = document.createElement('img');
  const tempElement = document.createElement('div');
  const weatherElement = document.createElement('div');
  const windElement = document.createElement('div');

  const iconURL = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  icon.src = iconURL;
  icon.width = 150;

  cityElement.textContent = city;

  weatherElement.textContent = `Description: ${weather.description}`;

  const cTemp = temp.temp;
  const cTempFeel = temp.feels_like;
  let fTemp = (cTemp * (9 / 5)) + 32;
  fTemp = +fTemp.toFixed(2);
  let fTempFeel = (cTempFeel * (9 / 5)) + 32;
  fTempFeel = +fTempFeel.toFixed(2);

  tempElement.textContent =
    `Temperature: ${cTemp}° Celsius / ${fTemp}° Fahrenheit, feels like ${cTempFeel}° Celsius / ${fTempFeel}° Fahrenheit`;
  windElement.textContent = `Wind speed: ${wind.speed} m/s`;

  div.appendChild(cityElement);
  div.appendChild(icon);
  div.appendChild(weatherElement);
  div.appendChild(tempElement);
  div.appendChild(windElement);

  div.classList.remove('hidden');
};
