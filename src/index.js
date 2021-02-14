import $ from 'jquery';
import { fetchWeather, fetchAirPollutionData } from './api';

import sunCloud from './assets/icons/sunCloud.png';
import Weather from './weather';
import './style/style.scss';

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
  $('#air-qlty').text(data.airPullutionLevel);
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
