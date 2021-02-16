import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const apiKey = '84946c19e2232ccf022ba8e37dbacab7';

export const fetchWeather = async (city = 'stockholm', units = 'metric') => {
  try {
    const response = await client.get(
      `weather?q=${city}&units=${units}&appid=${apiKey}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchAirPollutionData = async (lat, lon) => {
  try {
    const response = await client.get(
      `air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
