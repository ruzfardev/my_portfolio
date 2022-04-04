import classes from './WeeklyDataItem.module.css';
const WeeklyDataItem = (props) => {
  const { dt, humidity, temp, weather, wind_speed } = props.weeklydata;
  const date = new Date(dt * 1000);
  const iconId = weather[0].id;
  return (
    <div className={`${classes['weekly-box']} ${classes.box} fade`}>
      <span className={classes['week-time']}>
        {date.toLocaleDateString('uz-UZ')}
      </span>
      <div className={`${classes['week-data']}`}>
        <i
          className={`wi ${classes['weekly-weather__icon']} wi-owm-day-${iconId}`}
        ></i>
        <span className={`${classes.temp} ${classes['temp-weekly']}`}>
          {Math.round(temp.day)}&deg;
        </span>
      </div>
      <div className={classes['weekly-data']}>
        <span>{Math.round(humidity)}%</span>
        <span>{wind_speed}m/s</span>
      </div>
    </div>
  );
};
export default WeeklyDataItem;
