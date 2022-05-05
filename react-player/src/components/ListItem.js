import classes from './ListItem.module.css';
function ListItem() {
  return (
    <div className={classes['list-item']}>
      <div className={classes['play-button']}>
        <span className={classes['btn-play']}></span>
      </div>
      <div className={classes.detail}>
        <p>Author Name</p>
        <p>Name of song</p>
      </div>
      <span className={classes.duration}>03:45</span>
    </div>
  );
}

export default ListItem;
