import classes from './PlayerControls.module.css';
import 'fontawesome-free/css/all.min.css';
import { useSelector } from 'react-redux';
import defaultImg from "../img/download.png";
function PlayerControls() {
  const {musicList} = useSelector((state) => state);
  if(musicList.selectedMusic !== undefined) {
    const {artist, img} = musicList.selectedMusic;
  return (
      <div className={classes['player-controls']}>
      <div className={classes.disc}>
        {/* <img className={classes.img} src={img ? img : defaultImg} alt={artist}/> */}
      </div>
      <div className={classes.controls}>
        <label>{artist ? artist : "Select music"}</label>
        <input className={classes.range} type='range' />
        <div className={classes['controls-button']}>
          <i className='icon angle double left'></i>
          <i className='icon caret right'></i>
          <i className='icon angle double right'></i>
        </div>
      </div>
    </div>
  );
  }else{
    return <div>
      Select
    </div>
  }
}
export default PlayerControls;
