class App {
  constructor(currentWeather) {
    this.currentWeather = currentWeather;
    this.forecast = [];
  }

  getForecast() {
    return this.forecast;
  }

  getCurrentWeather() {
    return this.currentWeather;
  }
}

export default App;
