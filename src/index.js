import $ from 'jquery';
import { fetchForecast, fetchWeather } from './api';

import './style/style.scss';
import sunCloud from './assets/icons/sunCloud.png';
import Weather from './weather';

const tempIconContainer = document.querySelector('.temp-icon');

const tempLogo = new Image();

tempLogo.src = sunCloud;

tempIconContainer.appendChild(tempLogo);

const renderCurrentWeather = (data) => {
  const temp = parseInt(data.temp, 10);
  $('.city').text(data.city);
  $('.country').text(`, ${data.country}`);
  $('.temperature').text(`${temp}°`);
  $('#weather-condition').text(data.weatherDesc);
  $('#max').text(`Maximum Temperature: ${data.maxTemp}°`);
  $('#min').text(`Minimum Temperature: ${data.minTemp}°`);
  $('.feels-like-temp').text(`${data.feelsLike}°`);
  $('.pressure-mes').text(`${data.pressure} hPa`);
  $('.sunrise-time').text(data.sunrise);
  $('.sunset-time').text(data.sunset);
  $('#humidity-val').text(`${data.humidity}%`);
  $('#wind-val').text(`${data.windSpeed} m/sec`);
};

const renderForecast = (data) => {
  console.log(data[0].dt);
};

const getForecast = async (city) => {
  try {
    const response = await fetchForecast(city);
    renderForecast(response.list, response.timezone, response.name);
  } catch (error) {
    console.log('No data found for this city');
  }
};

const getWeather = async (city) => {
  try {
    const response = await fetchWeather(city);
    const weather = new Weather(
      response.main,
      response.weather,
      response.sys,
      response.name,
      response.wind.speed,
      response.dt,
      response.timezone
    );

    renderCurrentWeather(weather.getWeatherData());
  } catch (error) {
    console.log('No data found for this city');
  }
};

const main = () => {
  getWeather();
  getForecast();

  const handleWeatherForm = (event) => {
    event.preventDefault();
    const form = $(event.target);
    const city = form.serializeArray()[0].value;
    getWeather(city);
    getForecast(city);
    form[0].reset();
  };

  $('#cityForm').on('submit', handleWeatherForm);
};

$(main);
