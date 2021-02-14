import moment from 'moment';

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
    this.main = main;
    this.weather = weather;
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

  // convertTempToFeren() {
  //   const { temp } = this.main.temp;
  //   const fahrenheitTemp = temp * 1.8 + 32;
  //   return fahrenheitTemp;
  // }

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
      weatherDesc: this.weather[0].description,
      windSpeed: this.windSpeed,
      country,
      sunrise: this.convertTime(sunrise),
      sunset: this.convertTime(sunset),
      city: this.name,
      date: this.convertDate(),
      airPullutionLevel: this.getAirQualityInfo(),
    };
  }

  getAirQualityInfo() {
    return this.airqualityMes[this.airQuality];
  }

  getForecastInfo() {
    return {
      minTemp: this.main.temp_min,
      maxTemp: this.main.temp_max,
      date: this.convertDate(),
      weatherDesc: this.weather[0].description,
    };
  }
}

export default Weather;
