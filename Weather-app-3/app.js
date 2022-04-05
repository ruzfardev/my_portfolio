'use-strict';
const currentWeather = document.querySelector('.current-weather');
const weeklyWeather = document.querySelector('.weekly-weather');
////
const userInput = document.querySelector('.input');
const searchForm = document.querySelector('.search');
const controlsBtn = document.querySelector('.controls');
////
const date = document.querySelector('.date');
const time = document.querySelector('.time');

// Refreshing page
controlsBtn.addEventListener('click', (e) => {
  const locationBtn = e.target.closest('.location');
  const refreshBtn = e.target.closest('.refresh');
  if (locationBtn || refreshBtn) getUserPosition();
});
// Functions
const padStart = (number) => String(number).padStart(2, 0);

// Display and hide loader
const renderLoader = (parentElement) => {
  const markup = `
  <div class="container-loader">
  <p>Loading...</p>
    <i class="wi wi-snowflake-cold"></i>
  </div>
  `;
  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', markup);
};
const renderError = (parentElement) => {
  const markup = `
  <div class="container-error">
  <p>City not found for your query :( Please try again
  <i class="far fa-exclamation-triangle"></i>
  </p>
  </div>
  `;
  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', markup);
};
//Getting date (month, day, year)
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentDate = new Date();
const month = months[currentDate.getMonth()];
const currentDay = String(currentDate.getDate()).padStart(2, 0);
const weekDay = weekdays[currentDate.getDay()];
date.textContent = `${weekDay}, ${currentDay}, ${month}`;

// Setting time
const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const hour = document.querySelector('.hour');
  const min = document.querySelector('.min');
  hour.textContent = padStart(hours);
  min.textContent = padStart(minutes);
};
setInterval(getTime, 1000);
let lat, lng;
let url;

// Fetchin data via API
const weather = async function (url) {
  renderLoader(currentWeather);
  let data;
  try {
    const res = await fetch(url);
    data = await res.json();
    // Getting data
    let { name, sys, weather, wind } = data;
    let { temp, humidity, temp_max, temp_min } = data.main;
    [lat, lng] = [data.coord.lat, data.coord.lon];
    const iconCode = weather[0].id;
    const currentSunset = new Date(sys.sunset * 1000);
    const currentSunrise = new Date(sys.sunrise * 1000);
    const sunrise =
      padStart(currentSunrise.getHours()) +
      ':' +
      padStart(currentSunrise.getMinutes());
    const sunset =
      padStart(currentSunset.getHours()) +
      ':' +
      padStart(currentSunset.getMinutes());
    const markup = `
    <div class="city fade">${name}, ${sys.country}</div>
      <div class="left fade">
        <div class="current-weather__icon icon">
          <i class="wi wi-owm-day-${iconCode}"></i>
        </div>
        <div class="current-weather__data">
          <h1 class="temp-current">${Math.round(temp)}°</h1>
          <label class="description">${
            weather[0].description.charAt(0).toUpperCase() +
            weather[0].description.slice(1)
          }</label>
        </div>
      </div>
      <div class="right fade">
        <div class="box">
          <label class="label">High</label>
          <span class="temp temp-high">${Math.ceil(temp_max)}°</span>
          <i class="wi wi-thermometer"></i>
        </div>
        <div class="box">
          <label class="label">Wind</label>
          <span class="temp temp-wind">${wind.speed}m/s</span>
          <i class="wi wi-windy"></i>
        </div>
        <div class="box sunrise">
          <label class="label">Sunrise</label>
          <span class="temp temp-sunrise">${sunrise}</span>
          <i class="wi wi-sunrise"></i>
        </div>
        <div class="box">
          <label class="label">Low</label>
          <span class="temp temp-low">${Math.ceil(temp_min)}°</span>
          <i class="wi wi-thermometer-exterior"></i>
        </div>
        <div class="box">
          <label class="label">Rain</label>
          <span class="temp temp-rain">${humidity}</span>
          <i class="wi wi-humidity"></i>
        </div>
        <div class="box">
          <label class="label">Sunset</label>
          <span class="temp temp-sunset">${sunset}</span>
          <i class="wi wi-sunset"></i>
        </div>
      </div>
    </div>`;
    currentWeather.innerHTML = '';
    currentWeather.insertAdjacentHTML('afterbegin', markup);

    new Promise(async function (resolve) {
      renderLoader(weeklyWeather);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&units=metric&appid=937baab680701220667de612cec76331`
      );
      if (res.ok) {
        resolve(res.json());
      } else {
        throw new Error('Something went wrong :(');
      }
    }).then((weeklyWeatherData) => {
      const weeklyData = weeklyWeatherData.daily;
      weeklyWeather.innerHTML = '';
      for (let index = 1; index < weeklyData.length; index++) {
        let { dt, weather, temp, humidity, wind_speed } = weeklyData[index];
        const weekDate = new Date(dt * 1000).getDate();
        const weeklyWeatherIcon = weather[0].id;
        const weekTemp = Math.floor(temp.day);
        const html = `
        <div class="weekly-box fade box">
          <span class="week-time">${weekDate}-${month}, ${
          weekdays[new Date(dt * 1000).getDay()]
        }</span>
        <div class="week-data">
        <i class="wi weekly-weather__icon wi-owm-day-${weeklyWeatherIcon}"></i>
        <span class="temp temp-weekly">${weekTemp}°</span>
        </div>
          <div class='weekly-data'>
            <i class='wi wi-humidity'></i>
            <span>${humidity}%</span>
            <i class='wi wi-windy'></i>
            <span>${wind_speed}m/s</span>
          </div>
        </div>
          `;
        weeklyWeather.insertAdjacentHTML('afterbegin', html);
      }
    });
  } catch (error) {
    currentWeather.innerHTML = '';
    weeklyWeather.innerHTML = '';
    renderError(currentWeather);
  }
};
// Default data
//Identify user's location
// Show weather data based on latitude and longitude
const getUserPosition = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    let { latitude, longitude } = position.coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=937baab680701220667de612cec76331`;
    weather(url);
  });
};
// window.addEventListener('load', getUserPosition);
// Searching
let userInputValue;
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let userInputValue = userInput.value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${userInputValue}&units=metric&appid=937baab680701220667de612cec76331`;
  if (userInput == '') {
    return false;
  } else {
    weather(url);
    userInput.blur();
    userInput.value = '';
  }
  return;
});
