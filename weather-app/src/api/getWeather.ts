import axios from 'axios';

export interface IWeather {
  main: {
    temp: number;
  },
  name: string;
  weather: IWeatherArray[];
};
export interface IWeatherArray {
  id: number;
  main: string;
  icon: number | string;
};
const getWeatherCoords = async (lat: number, lon: number, apiKey:number | string ): Promise<IWeather>=> {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

  return response.data;
};

export default getWeatherCoords;
