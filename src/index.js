import $ from 'jquery';
import { fetchWeatherByGeoLocation } from './api';

import './style/style.scss';
import sunCloud from './assets/icons/sunCloud.png';
import Weather from './weather';
import App from './app';

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
};

const getGeolocation = async () => {
  const response = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return response;
};

const weatherByGeolocation = async () => {
  try {
    const myLocation = await getGeolocation();
    const { latitude, longitude } = myLocation.coords;
    const data = await fetchWeatherByGeoLocation(latitude, longitude);
    const weather = new Weather(
      data.main,
      data.weather,
      data.sys,
      data.name,
      data.wind.speed,
      data.dt
    );
    renderCurrentWeather(weather.getWeatherData());
    console.log(weather.getWeatherData());
  } catch (error) {
    console.log(error);
  }
};

const main = () => {
  const app = new App();
};

$(main);
