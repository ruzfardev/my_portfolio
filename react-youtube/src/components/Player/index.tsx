import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
const Player = () => {
  const { videoId } = useParams();
  return (
    <Container
      maxWidth='lg'
      sx={{
        borderRaduis: '1rem',
        height: '80vh',
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
    </Container>
  );
};

export default Player;
