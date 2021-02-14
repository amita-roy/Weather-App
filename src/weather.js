import moment from 'moment';

class Weather {
  constructor(main, weather, sys, name, windSpeed, date, timezone) {
    this.main = main;
    this.weather = weather;
    this.sys = sys;
    this.name = name;
    this.windSpeed = windSpeed;
    this.date = date;
    this.timezone = timezone;
  }

  convvertDate() {
    const dateObject = new Date(this.date * 1000);
    return dateObject.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
    });
  }

  convertTime(unixValue) {
    return moment.unix(unixValue + this.timezone).format('hh:mm A');
  }

  convertTempToFeren() {
    const { temp } = this.main.temp;
    const fahrenheitTemp = temp * 1.8 + 32;
    return fahrenheitTemp;
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
      weatherDesc: this.weather[0].description,
      windSpeed: this.windSpeed,
      country,
      sunrise: this.convertTime(sunrise),
      sunset: this.convertTime(sunset),
      city: this.name,
      date: this.convvertDate(),
    };
  }

  // getWeatherIcon() {}
}

export default Weather;
