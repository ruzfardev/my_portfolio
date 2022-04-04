import classes from './Time.module.css';
import { useEffect, useState } from 'react';
let currentTime;
const Time = () => {
  const [currentTime, setCurrentTime] = useState('');
  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const Time = `${hours}:${minutes}`;
    setCurrentTime(Time);
  };

  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  return <div className={classes['current-time']}>{currentTime}</div>;
};

export default Time;
