import ListItem from './ListItem';
import classes from './MusicList.module.css';
import { useSelector } from 'react-redux';
function MusicList() {
  const {musicList} = useSelector((state) => state);
  return (
    <div className={classes['music-list']}>
      {musicList && musicList.list.map((item, index) => (
        <ListItem key={index} title={item.title} artist={item.artist} img={item.img} />
      ))}
    </div>
  );
}
export default MusicList;
