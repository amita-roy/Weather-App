class Weather {
  constructor(main, weatherDesc, sys, name, windSpeed, date) {
    this.main = main;
    this.weatherDesc = weatherDesc;
    this.sys = sys;
    this.name = name;
    this.windSpeed = windSpeed;
    this.date = date;
  }

  convvertDate() {
    const dateObject = new Date(this.date * 1000);
    return dateObject.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
    });
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
      weatherDesc: this.weatherDesc,
      windSpeed: this.windSpeed,
      country,
      sunrise,
      sunset,
      city: this.name,
      date: this.convvertDate(),
    };
  }
}

export default Weather;
