import classes from './ListItem.module.css';
import { setSelectedMusic } from '../reducers';
import { useDispatch } from 'react-redux';
function ListItem(props) {
  const dispatch = useDispatch();
  const { title, artist, img } = props;
  return (
    <div className={classes['list-item']}>
      <div
      onClick={() => dispatch(setSelectedMusic({title, artist, img}))
      }
      className={classes['play-button']}>
        <span className={classes['btn-play']}
    
        
        ></span>
      </div>
      <div className={classes.detail}>
        <p>
          {artist}
        </p>
        <p>
          {title}
        </p>
      </div>
      <span className={classes.duration}>03:45</span>
    </div>
  );
}

export default ListItem;
