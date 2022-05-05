import classes from './PlayerControls.module.css';
import 'fontawesome-free/css/all.min.css';

function PlayerControls() {
  return (
    <div className={classes['player-controls']}>
      <div className={classes.disc}>
        <img src='' />
      </div>
      <div className={classes.controls}>
        <label>Author Name</label>
        <input className={classes.range} type='range' />
        <div className={classes['controls-button']}>
          <i className='icon angle double left'></i>
          <i className='icon caret right'></i>
          <i className='icon angle double right'></i>
        </div>
      </div>
    </div>
  );
}
export default PlayerControls;
