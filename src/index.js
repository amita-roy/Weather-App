import $ from 'jquery';

import './style/style.scss';
// import cloudSun from './assets/icons/cloudSun.svg';
import sunCloud from './assets/icons/sunCloud.png';

const tempIconContainer = document.querySelector('.temp-icon');

const tempLogo = new Image();

tempLogo.src = sunCloud;

tempIconContainer.appendChild(tempLogo);

const apiKey = '84946c19e2232ccf022ba8e37dbacab7';

const url = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
};

const renderCurrentTempInfo = (data) => {
  const temp = parseInt(data.main.temp, 0);
  $('.city').text(data.name);
  $('.country').text(`, ${data.sys.country}`);
  $('.temperature').text(`${temp}°`);
};

const getGeolocationData = () => {
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

const getCoordinates = async () => {
  let myLocation;
  try {
    myLocation = await getGeolocationData();
    const { latitude, longitude } = myLocation.coords;
    return { latitude, longitude };
  } catch (error) {
    return error.message;
  }
};

getCoordinates()
  .then((cords) => cords)
  .then((result) =>
    fetch(url(result.latitude, result.longitude))
      .then((result) => result.json())
      .then((res) => renderCurrentTempInfo(res))
  )
  .catch((error) => alert(`Please allow location access`));
