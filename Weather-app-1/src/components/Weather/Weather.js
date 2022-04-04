import TodaysWeather from './TodaysWeather';
import classes from './Weather.module.css';
import WeeklyData from './WeeklyData';

const Weather = () => {
  return (
    <section className={classes.main}>
      <TodaysWeather />
      <WeeklyData />
    </section>
  );
};
export default Weather;
