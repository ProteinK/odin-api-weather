/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API_ENDPOINT = \"https://api.openweathermap.org/data/2.5/weather\";\nconst API_KEY = \"1b3ffde3dfb107c54580add006ecd1e3\";\n\nconst form = document.getElementById('weather-form');\nform.addEventListener('submit', (e) => {\n  const city = document.getElementById('city').value;\n  getWeatherForCity(city).then(({ temp, weather, wind }) => {\n    console.log(temp, weather, wind);\n    displayWeatherInfo(temp, weather, wind, city);\n  });\n  e.preventDefault();\n});\n\nconst getWeatherForCity = async (city) => {\n  const params = `?q=${city}&units=metric&appid=${API_KEY}`;\n  const url = API_ENDPOINT + params;\n  const response = await fetch(url);\n  const data = await response.json();\n  const { main: temp, weather: [weather], wind } = data;\n  return { temp, weather, wind };\n};\n\nconst displayWeatherInfo = (temp, weather, wind, city) => {\n  const div = document.getElementById('weather-info');\n  div.innerHTML = '';\n\n  const cityElement = document.createElement('h1');\n  const icon = document.createElement('img');\n  const tempElement = document.createElement('div');\n  const weatherElement = document.createElement('div');\n  const windElement = document.createElement('div');\n\n  const iconURL = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;\n  icon.src = iconURL;\n\n  cityElement.textContent = city;\n\n  weatherElement.textContent = `Description: ${weather.description}`;\n  tempElement.textContent = `Temperature: ${temp.temp}° Celsius, feels like ${temp.feels_like}° Celsius`;\n  windElement.textContent = `Wind speed: ${wind.speed} m/s`;\n\n  div.appendChild(cityElement);\n  div.appendChild(icon);\n  div.appendChild(weatherElement);\n  div.appendChild(tempElement);\n  div.appendChild(windElement);\n};\n\n\n//# sourceURL=webpack://odin-api-weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;