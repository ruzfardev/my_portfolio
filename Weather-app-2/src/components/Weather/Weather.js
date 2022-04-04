import TodaysWeather from './TodaysWeather';
import classes from './Weather.module.css';
import WeeklyData from './WeeklyData';
const Weather = (props) => {
  return (
    <section className={classes.main}>
      <TodaysWeather userInput={props.userInput} />
      <WeeklyData userInput={props.userInput} />
    </section>
  );
};
export default Weather;
