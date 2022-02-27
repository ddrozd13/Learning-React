import { FC, useState } from 'react';
import styles from './App.module.scss';
import { IWeather } from './api/getWeather';
import { IWeatherForecast } from './api/getForecast';

const Another: FC = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast | null>(null);
  const API_KEY = '58b6f7c78582bffab3936dac99c31b25';

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

  return (
    <div>
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
  )
};

export default Another;
