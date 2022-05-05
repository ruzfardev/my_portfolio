import Browse from './Browse';
import MusicList from './MusicList';
import classes from './Player.module.css';
import PlayerControls from './PlayerControls';
function Player() {
  return (
    <div className={classes.player}>
      <PlayerControls />
      <MusicList />
      <Browse />
    </div>
  );
}
export default Player;
