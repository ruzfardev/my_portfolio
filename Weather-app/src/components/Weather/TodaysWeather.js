import classes from './TodaysWeather.module.css';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherRequest } from '../../actions';
import LoadingSpinner from '../UI/LoadingSpinner';
const TodaysWeather = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWeatherData.data);
  const loading = useSelector((state) => state.getUIState.loading);
  const error = useSelector((state) => state.getUIState.error);

  useEffect(() => {
    dispatch(getWeatherRequest());
  }, [dispatch]);

  const SunriseSunset = (data) => {
    const hour = String(new Date(data * 1000).getHours()).padStart(2, 0);
    const min = String(new Date(data * 1000).getMinutes()).padStart(2, 0);
    return String(hour + ':' + min);
  };
  let currentData;
  if (loading) {
    return (currentData = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    ));
  }

  if (error) {
    return (currentData = (
      <div className='centered focused'>{error.message} :(</div>
    ));
  }
  return (
    // <Fragment>{data?.name}</Fragment>
    <Fragment>
      <div className={`${classes.city} fade`}>
        <h1>
          {data?.name + ','} {data?.sys?.country}
        </h1>
      </div>
      <section className={`${classes['current-weather']} fade`}>
        <div className={classes.left}>
          <div className={`${classes.icon}`}>
            <i className={`wi wi-owm-day-${data?.weather[0].id}`}></i>
          </div>
          <div className={classes['current-weather__data']}>
            <h1 className={classes['temp-current']}>
              {Math.floor(data?.main.temp)}&deg;
            </h1>
            <label className={classes.description}>
              {data?.weather[0].description}
            </label>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.box}>
            <label className={classes.label}>High</label>
            <span className={`${classes.temp} ${classes['temp-high']}`}>
              {Math.round(data?.main.temp_max)}&deg;
            </span>
            <i className='wi wi-thermometer'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Wind</label>
            <span className={`${classes.temp} ${classes['temp-high']}`}>
              {data?.wind_speed}m/s
            </span>
            <i className='wi wi-windy'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Sunrise</label>
            <span className={`${classes.temp} ${classes['temp-sunrise']}`}>
              {SunriseSunset(data?.sys.sunrise)}
            </span>
            <i className='wi wi-sunrise'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Low</label>
            <span className={`${classes.temp} ${classes['temp-low']}`}>
              {Math.round(data?.main.temp_min)}&deg;
            </span>
            <i className='wi wi-thermometer-exterior'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Rain</label>
            <span className={`${classes.temp} ${classes['temp-rain']}`}>
              {data?.main.humidity}%
            </span>
            <i className='wi wi-humidity'></i>
          </div>
          <div className={classes.box}>
            <label className={classes.label}>Sunset</label>
            <span className={`${classes.temp} ${classes['temp-sunset']}`}>
              {SunriseSunset(data?.sys.sunset)}
            </span>
            <i className='wi wi-sunset'></i>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TodaysWeather;
