import { Fragment, useEffect } from 'react';
import classes from './TodaysWeather.module.css';
import { getTodaysWeatherData } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/useHttp';

const TodaysWeather = (props) => {
  const { sendRequest, status, data, error } = useHttp(
    getTodaysWeatherData,
    true
  );

  const userInput = props.userInput;
  useEffect(() => {
    sendRequest(userInput);
  }, [sendRequest, userInput]);

  let currentData;
  if (status === 'pending') {
    return (currentData = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    ));
  }

  if (error) {
    return (currentData = <div className='centered focused'>{error}</div>);
  }

  if (status === 'completed' && !data) {
    return (currentData = <p>Error</p>);
  }
  return (
    <Fragment>
      <div className={`${classes.city} fade`}>
        <h1>
          {data.city}, {data.country}
        </h1>
      </div>
      <section className={`${classes['current-weather']} fade`}>
        <div className={classes.left}>
          <div className={`${classes.icon}`}>
            <i className={`wi wi-owm-day-${data.id}`}></i>
          </div>
          <div className={classes['current-weather__data']}>
            <h1 className={classes['temp-current']}>
              {Math.round(data.temp)}&deg;
            </h1>
            <label className={classes.description}>{data.description}</label>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.box}>
            <label className={classes.label}>High</label>
            <span className={`${classes.temp} ${classes['temp-high']}`}>
              {Math.round(data['temp_max'])}&deg;
            </span>
            <i className='wi wi-thermometer'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Wind</label>
            <span className={`${classes.temp} ${classes['temp-high']}`}>
              {data.wind_speed}m/s
            </span>
            <i className='wi wi-windy'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Sunrise</label>
            <span className={`${classes.temp} ${classes['temp-sunrise']}`}>
              {String(new Date(data.sunrise * 1000).getHours()).padStart(2, 0)}:
              {String(new Date(data.sunrise * 1000).getMinutes()).padStart(
                2,
                0
              )}
            </span>
            <i className='wi wi-sunrise'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Low</label>
            <span className={`${classes.temp} ${classes['temp-low']}`}>
              {Math.round(data['temp_min'])}&deg;
            </span>
            <i className='wi wi-thermometer-exterior'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Rain</label>
            <span className={`${classes.temp} ${classes['temp-rain']}`}>
              {data.humidity}%
            </span>
            <i className='wi wi-humidity'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Sunset</label>
            <span className={`${classes.temp} ${classes['temp-sunset']}`}>
              {String(new Date(data.sunset * 1000).getHours()).padStart(2, 0)}:
              {String(new Date(data.sunset * 1000).getMinutes()).padStart(2, 0)}
            </span>
            <i className='wi wi-sunset'></i>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TodaysWeather;
