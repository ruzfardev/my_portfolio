import { Grid } from '@mui/material';
import React from 'react';
import ListOfVideos from '../List';
import Player from '../Player';

const VideoDetail = () => {
  return (
    <Grid
      container
      sx={{
        padding: '6rem 1rem',
        height: '100vh',
      }}
    >
      <Grid item xs={9}>
        <Player />
      </Grid>
      <Grid item xs={3}>
        <ListOfVideos />
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
