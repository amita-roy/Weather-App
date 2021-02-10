import './style/style.scss';
// import cloudSun from './assets/icons/cloudSun.svg';
import sunCloud from './assets/icons/sunCloud.png';

const tempIconContainer = document.querySelector('.temp-icon');

const tempLogo = new Image();

tempLogo.src = sunCloud;

tempIconContainer.appendChild(tempLogo);
