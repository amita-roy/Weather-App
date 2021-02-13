import axios from 'axios';

// const apiKey = '84946c19e2232ccf022ba8e37dbacab7';

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

export const fetchWeatherByGeoLocation = async (lat, lon) => {
  try {
    const response = await client.get(
      `?lat=${lat}&lon=${lon}&units=metric&appid=84946c19e2232ccf022ba8e37dbacab7`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchForecast = () => {};
