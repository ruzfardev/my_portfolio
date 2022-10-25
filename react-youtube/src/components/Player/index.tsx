import { Box, Card, Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Player = () => {
  const { videoId } = useParams();
  const { selectedVideo } = useSelector((state: any) => state.videos);
  return (
    <Box
      sx={{
        height: '100%',
        width: '95%',
        margin: '0 auto',
      }}
    >
      <iframe
        title={selectedVideo?.snippet.title}
        width='100%'
        height='90%'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{
          borderRadius: '1rem',
        }}
      ></iframe>
      <Card
        sx={{
          padding: '1rem',
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontSize: '1.5rem',
            lineHeight: '2em',
            height: '2em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          component='p'
        >
          {selectedVideo.snippet.title}
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{
            fontSize: '0.8rem',
            fontWeight: 400,
            color: 'text.secondary',
          }}
          component='p'
        >
          {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{
            fontSize: '0.7rem',
            fontWeight: 200,
            color: 'text.secondary',
          }}
          component='span'
        >
          {new Date(selectedVideo.snippet.publishedAt).toDateString()}
        </Typography>
      </Card>
    </Box>
  );
};

export default Player;
