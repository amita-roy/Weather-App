import { fetchForecast, fetchWeather } from './api';
import Weather from './weather';

class App {
  constructor() {
    this.currentWeather = {};
    this.forecast = [];
  }

  getCurrentWeather(city) {
    fetchWeather(city).then((result) => {
      const { main, weather, sys, name, wind, dt } = result;
      const currentWeather = new Weather(
        main,
        weather,
        sys,
        name,
        wind.speed,
        dt
      );
      this.currentWeather = currentWeather;
    });
    return this.currentWeather;
  }
}

export default App;
