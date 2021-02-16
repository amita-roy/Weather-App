import sunCloudIcon from './assets/icons/sunCloud.png';
import moonIcon from './assets/icons/moon.png';
import smokeIcon from './assets/icons/smoke.png';
import sunIcon from './assets/icons/sun.png';
import moonCloudIcon from './assets/icons/moonCloud.png';
import cloudyIcon from './assets/icons/cloudy.png';
import showerIcon from './assets/icons/rain.png';
import rainIcon from './assets/icons/lightRain.png';
import thunderstormIcon from './assets/icons/thunderstorm.png';
import snowIcon from './assets/icons/snow.png';
import sunCloudBg from './assets/images/sunCloud.jpg';
import moonCloudBg from './assets/images/moonCloud.jpg';
import cloudyBg from './assets/images/cloudy.jpg';
import mistBg from './assets/images/mist.jpg';
import moonBg from './assets/images/moon.jpg';
import rainBg from './assets/images/rain.jpg';
import showerBg from './assets/images/shower.jpg';
import snowBg from './assets/images/snow.jpg';
import sunBg from './assets/images/sun.jpg';
import thunderstormBg from './assets/images/thunderstorm.jpg';

const ICON_MAP = {
  '01d': {
    ic: sunIcon,
    bg: sunBg,
  },
  '01n': {
    ic: moonIcon,
    bg: moonBg,
  },
  '02d': {
    ic: sunCloudIcon,
    bg: sunCloudBg,
  },
  '02n': {
    ic: moonCloudIcon,
    bg: moonCloudBg,
  },
  '03d': {
    ic: cloudyIcon,
    bg: cloudyBg,
  },
  '03n': {
    ic: cloudyIcon,
    bg: cloudyBg,
  },
  '04d': {
    ic: cloudyIcon,
    bg: cloudyBg,
  },
  '04n': {
    ic: cloudyIcon,
    bg: cloudyBg,
  },
  '09d': {
    ic: showerIcon,
    bg: showerBg,
  },
  '09n': {
    ic: showerIcon,
    bg: showerBg,
  },
  '10d': {
    ic: rainIcon,
    bg: rainBg,
  },
  '10n': {
    ic: rainIcon,
    bg: rainBg,
  },
  '11d': {
    ic: thunderstormIcon,
    bg: thunderstormBg,
  },
  '11n': {
    ic: thunderstormIcon,
    bg: thunderstormBg,
  },
  '13d': {
    ic: snowIcon,
    bg: snowBg,
  },
  '13n': {
    ic: snowIcon,
    bg: snowBg,
  },
  '50d': {
    ic: smokeIcon,
    bg: mistBg,
  },
  '50n': {
    ic: smokeIcon,
    bg: mistBg,
  },
};

export default ICON_MAP;
