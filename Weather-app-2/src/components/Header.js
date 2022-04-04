import { useState } from 'react';
import classes from './Header.module.css';
import Time from './Time';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Header = (props) => {
  const [initInput, setInitInput] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.moveUserInput(initInput);
    setInitInput('');
  };

  const inputChangeHandler = (e) => {
    setInitInput(e.target.value);
  };

  const refreshHandler = () => {
    window.location.reload();
  };

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const currentDay = String(currentDate.getDate()).padStart(2, 0);
  const weekDay = weekdays[currentDate.getDay()];
  return (
    <header className={classes.header}>
      <form onSubmit={formSubmitHandler} className={classes.search}>
        <input
          onChange={inputChangeHandler}
          className={classes['search-input']}
          type='text'
          placeholder='Search by city name...'
          value={initInput}
        />
        <button className={classes['search-button']} type='submit'>
          <i className='wi wi-wind wi-towards-e'></i>
        </button>
      </form>
      <div className={classes.controls}>
        <div onClick={refreshHandler} className={`${classes.btn}`}>
          <i className='wi wi-cloud-refresh'></i>
        </div>
      </div>
      <div className={classes['date-time']}>
        <div className='date'>{`${weekDay}, ${currentDay}, ${month}`}</div>
        <Time />
      </div>
    </header>
  );
};
export default Header;
