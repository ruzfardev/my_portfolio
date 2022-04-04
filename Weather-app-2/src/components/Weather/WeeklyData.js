import { useEffect } from 'react';
import useHttp from '../../hooks/useHttp';
import { getWeeklyWeatherData } from '../../lib/api';
import classes from './WeeklyData.module.css';
import WeeklyDataItem from './WeeklyDataItem';
import LoadingSpinner from '../UI/LoadingSpinner';
const WeeklyData = (props) => {
  const { sendRequest, data, status, error } = useHttp(
    getWeeklyWeatherData,
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
    <section className={classes['weekly-weather']}>
      {data?.map((item, i) => {
        return <WeeklyDataItem key={i} weeklydata={item} />;
      })}
    </section>
  );
};
export default WeeklyData;
