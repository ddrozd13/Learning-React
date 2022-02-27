import React, { FC, useEffect, useState } from 'react';
import getWeatherCoords, { IWeather } from './api/getWeather';
import styles from './App.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import getCoordForecast, { IWeatherForecast } from './api/getForecast';
import { useNavigate } from 'react-router-dom';

const App: FC = () => {
  const navigate = useNavigate();
  const [long, setLong] = useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast | null>(null);
  const API_KEY = '58b6f7c78582bffab3936dac99c31b25';

  navigator.geolocation.getCurrentPosition(pos => {
    setLat(pos.coords.latitude);
    setLong(pos.coords.longitude);
  });

  const fetchWeather = async (lat: number , long: number, api: number | string) => {
    if(lat !== 0 && long !== 0){
      const data = await getWeatherCoords(lat, long, api);
      setWeather(data);
    }
  };
  const fetchWeatherForecast = async (lat: number , long: number, api: number | string) => {
    if(lat !== 0 && long !== 0){
      const forecasts = await getCoordForecast(lat, long, api);
      setWeatherForecast(forecasts);
    }
  };
  const forecastNumber = (dt: number): string => {
    const date = new Date(dt * 1e3);
    const dateNumber = `${date.getDate()}`

    return dateNumber;
  }
  const forecastDay = (dt: number): string => {
    const date = new Date(dt * 1e3);
    const dateDay = `${date.toString().slice(0, 3)}`;
    return dateDay
  }
  const handleOnClick = () => {
    navigate('/another');
  };
  const handleOnChange = () => {

  }

  useEffect(() => {
    fetchWeather(lat , long, API_KEY);
    fetchWeatherForecast(lat , long, API_KEY);
  }, [lat, long]);

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <input type="text" onSubmit={handleOnClick} onChange={handleOnChange} placeholder="Enter country..."/>
        {!weatherForecast && !weather && <CircularProgress color="secondary" />}
        {weather && (
          <div key={weather.weather[0].id} className={styles.weather}>
            <div className={styles.item}>
              <div>In "{weather.name}" now </div>
              &nbsp;
              <div>{Math.floor(weather.main.temp)}°C</div>
            </div>
            <div className={styles.item}>
              <div>{weather.weather[0].main}</div>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='icon' />
            </div>
          </div>
        )}
        <div className={styles.forecastContainer}>
          {weatherForecast && weatherForecast.list.map((item) => (
            <div className={styles.forecastItem} key={`${item.temp.max}${item.temp.min}`}>
              <div className={styles.forecastItemDate}>{forecastNumber(item.dt)}, May {forecastDay(item.dt)}</div>
              <div className={styles.forecastItemType}>{item.weather.map(info => info.main)}</div>
              <img className={styles.forecastItemIcon} alt="icon" src={`http://openweathermap.org/img/wn/${item.weather.map(info => info.icon)}@2x.png`}></img>
              <div className={styles.forecastItemTemp}>{Math.floor(item.temp.min)} / {Math.floor(item.temp.max)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
