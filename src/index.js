import $ from 'jquery';
import { fetchWeather, fetchAirPollutionData } from './api';

import Weather from './weather';
import './style/style.scss';

const tempIconContainer = document.querySelector('.temp-icon');

const tempLogo = new Image();

const renderCurrentWeather = (weather) => {
  const temp = parseInt(weather.temp, 10);
  $('.city').text(weather.city);
  $('.country').text(`, ${weather.country}`);
  $('.temperature').text(`${temp}°`);
  $('#weather-condition').text(weather.weatherDesc);
  $('#max').text(`Maximum Temperature: ${weather.maxTemp}°`);
  $('#min').text(`Minimum Temperature: ${weather.minTemp}°`);
  $('.feels-like-temp').text(`${weather.feelsLike}°`);
  $('.pressure-mes').text(`${weather.pressure} hPa`);
  $('.sunrise-time').text(weather.sunrise);
  $('.sunset-time').text(weather.sunset);
  $('#humidity-val').text(`${weather.humidity}%`);
  $('#wind-val').text(`${weather.windSpeed} m/sec`);
  $('#air-qlty').text(weather.airPullutionLevel);
  tempLogo.src = weather.icon;
  tempIconContainer.appendChild(tempLogo);
};

const getWeather = async (city, units = 'metric') => {
  try {
    const response = await fetchWeather(city, units);
    const { lon, lat } = response.coord;

    const airPollution = await fetchAirPollutionData(lat, lon);
    const airPollutionlevel = airPollution.list[0].main.aqi;

    const weather = new Weather(
      response.main,
      response.weather,
      response.sys,
      response.name,
      response.wind.speed,
      response.dt,
      response.timezone,
      airPollutionlevel
    );

    renderCurrentWeather(weather.getWeatherData());
  } catch (error) {
    console.log('No data found for this city');
  }
};

const main = () => {
  getWeather();

  const handleTempConvertToFarenheit = (event) => {
    event.preventDefault();
    $('#cel').removeClass('active');
    $('#fer').addClass('active');
    const city = $('.city').text();
    getWeather(city, 'imperial');
  };
  const handleTempConvertToCelcius = (event) => {
    event.preventDefault();
    $('#fer').removeClass('active');
    $('#cel').addClass('active');
    const city = $('.city').text();
    getWeather(city);
  };

  const handleWeatherForm = (event) => {
    event.preventDefault();
    const form = $(event.target);
    const city = form.serializeArray()[0].value;
    getWeather(city);

    $('#fer').on('click', handleTempConvertToFarenheit);
    $('#cel').on('click', handleTempConvertToCelcius);

    form[0].reset();
  };

  $('#cityForm').on('submit', handleWeatherForm);

  $('#fer').on('click', handleTempConvertToFarenheit);
  $('#cel').on('click', handleTempConvertToCelcius);
};

$(main);
