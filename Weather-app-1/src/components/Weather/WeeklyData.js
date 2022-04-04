import classes from './WeeklyData.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherRequest } from '../../actions';
import WeeklyDataItem from './WeeklyDataItem';
import LoadingSpinner from '../UI/LoadingSpinner';
const WeeklyData = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWeatherData.data);
  const loading = useSelector((state) => state.getUIState.loading);
  const error = useSelector((state) => state.getUIState.error);
  useEffect(() => {
    dispatch(getWeatherRequest());
  }, [dispatch]);
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
    <section className={classes['weekly-weather']}>
      {data?.daily.splice(1, 7).map((item, index) => {
        return <WeeklyDataItem key={index} weeklydata={item} />;
      })}
    </section>
  );
};
export default WeeklyData;
