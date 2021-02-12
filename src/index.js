import $ from 'jquery';
import weatherData from './api';

import './style/style.scss';
// import cloudSun from './assets/icons/cloudSun.svg';
import sunCloud from './assets/icons/sunCloud.png';
import App from './app';
import Weather from './weather';

const tempIconContainer = document.querySelector('.temp-icon');

const tempLogo = new Image();

tempLogo.src = sunCloud;

tempIconContainer.appendChild(tempLogo);

const renderCurrentTempInfo = (data) => {
  const temp = parseInt(data.main.temp, 0);
  $('.city').text(data.name);
  $('.country').text(`, ${data.sys.country}`);
  $('.temperature').text(`${temp}°`);
};

const getGeolocation = () => {
  const promise = new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        res(success);
      },
      (error) => {
        rej(error.message);
      }
    );
  });

  return promise;
};

const geoLocationData = async () => {
  let myLocation;
  try {
    myLocation = await getGeolocation();
    const { latitude, longitude } = myLocation.coords;
    const data = await weatherData(latitude, longitude);
    renderCurrentTempInfo(data);
  } catch (error) {
    window.alert(error);
  }
};

geoLocationData();

const main = () => {
  const { main, weatherDesc, sys, name, windSpeed, dt} = ;
  const weather = new Weather();
  const app = new App();
};

$(main);
