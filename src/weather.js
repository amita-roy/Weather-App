import moment from 'moment';
import ICON_MAP from './assetData';

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
      background: this.getBackground(),
    };
  }

  getAirQualityInfo() {
    return this.airqualityMes[this.airQuality];
  }

  getWeatherIcon() {
    const icon = ICON_MAP[this.weather.icon];

    return icon.ic;
  }

  getBackground() {
    const icon = ICON_MAP[this.weather.icon];
    return icon.bg;
  }
}

export default Weather;
