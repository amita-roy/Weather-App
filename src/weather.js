import moment from 'moment';
import sunCloud from './assets/icons/sunCloud.png';
import moon from './assets/icons/moon.png';
import smoke from './assets/icons/smoke.png';
import sun from './assets/icons/sun.png';
import moonCloud from './assets/icons/moonCloud.png';
import cloudy from './assets/icons/cloudy.png';
import shower from './assets/icons/rain.png';
import rain from './assets/icons/lightRain.png';
import thunderstorm from './assets/icons/thunderstorm.png';
import snow from './assets/icons/snow.png';

const ICON_MAP = {
  '01d': sun,
  '01n': moon,
  '02d': sunCloud,
  '02n': moonCloud,
  '03d': cloudy,
  '03n': cloudy,
  '04d': cloudy,
  '04n': cloudy,
  '09d': shower,
  '09n': shower,
  '10d': rain,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '10n': rain,
  '13d': snow,
  '13n': snow,
  '50d': smoke,
  '50n': smoke,
};

class Weather {
  constructor(
    main,
    weather,
    sys = {},
    name = '',
    windSpeed,
    date,
    timezone = '',
    airQuality
  ) {
    const [currentWeather] = weather;
    this.main = main;
    this.weather = currentWeather;
    this.sys = sys;
    this.name = name;
    this.windSpeed = windSpeed;
    this.date = date;
    this.timezone = timezone;
    this.airQuality = airQuality;
    this.airqualityMes = {
      1: 'Good',
      2: 'Fair',
      3: 'Moderate',
      4: 'Poor',
      5: 'Very Poor',
    };
  }

  convertDate() {
    const dateObject = new Date(this.date * 1000);
    return dateObject.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
    });
  }

  convertTime(unixValue) {
    return moment.unix(unixValue + this.timezone).format('hh:mm A');
  }

  getWeatherData() {
    const { temp, humidity, pressure } = this.main;
    const { country, sunrise, sunset } = this.sys;
    return {
      temp,
      feelsLike: this.main.feels_like,
      minTemp: this.main.temp_min,
      maxTemp: this.main.temp_max,
      humidity,
      pressure,
      weatherDesc: this.weather.description,
      windSpeed: this.windSpeed,
      country,
      sunrise: this.convertTime(sunrise),
      sunset: this.convertTime(sunset),
      city: this.name,
      date: this.convertDate(),
      airPullutionLevel: this.getAirQualityInfo(),
      icon: this.getWeatherIcon(),
    };
  }

  getAirQualityInfo() {
    return this.airqualityMes[this.airQuality];
  }

  getWeatherIcon() {
    return ICON_MAP[this.weather.icon];
  }
}

export default Weather;
