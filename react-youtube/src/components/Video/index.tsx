import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ListOfVideos from '../List';
import Player from '../Player';

const VideoDetail = () => {
  return (
    <Grid
      container
      sx={{
        padding: '0 1rem',
        paddingTop: '6rem',
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
