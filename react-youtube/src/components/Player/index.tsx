import { Box, Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
const Player = () => {
  const { videoId } = useParams();
  return (
    <Box
      sx={{
        height: '80vh',
        width: '95%',
        margin: '0 auto',
      }}
    >
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default Player;
