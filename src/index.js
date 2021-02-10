import './style/style.scss';
import cloudSun from './assets/icons/cloudSun.svg';

const tempIconContainer = document.querySelector('.temp-icon');

const tempLogo = new Image();

tempLogo.src = cloudSun;

tempIconContainer.appendChild(tempLogo);
