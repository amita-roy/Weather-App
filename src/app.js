import Weather from './weather';

class App {
  constructor() {
    this.forecast = [];
  }

  addForecast(data) {
    this.forecast.push(data);
  }

  getForecast() {
    return this.forecast;
  }
}

export default App;
