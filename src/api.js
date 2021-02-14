import axios from 'axios';

// const apiKey = '84946c19e2232ccf022ba8e37dbacab7';

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const fetchWeather = async (city = 'stockholm') => {
  try {
    const response = await client.get(
      `weather?q=${city}&units=metric&appid=84946c19e2232ccf022ba8e37dbacab7`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchForecast = async (city = 'stockholm') => {
  try {
    const response = await client.get(
      `forecast?q=${city}&units=metric&appid=84946c19e2232ccf022ba8e37dbacab7`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
