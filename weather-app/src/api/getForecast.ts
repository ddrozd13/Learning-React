import axios from 'axios';

export interface IWeatherForecast {
  list: IWeatherForecastItems[];
};
export interface IWeatherProps {
  main: string;
  icon: number | string;
};
export interface IWeatherForecastItems {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: IWeatherProps[];
};
const getCoordForecast = async (lat: number, lon: number, apiKey: number | string): Promise<IWeatherForecast> => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=8&appid=${apiKey}`);

  return response.data;
};

export const getCountryForecast = async () => {

};

export default getCoordForecast;
