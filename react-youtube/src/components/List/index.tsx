import * as React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import { useParams } from 'react-router-dom';
import './style.css';
import { Box } from '@mui/material';
const VideoList = () => {
  const { videos, searchResults } = useSelector((state: any) => state.videos);
  const { videoId } = useParams();
  return (
    <Box
      className='video_list'
      sx={{
        height: '80vh',
        overflowX: 'scroll',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: ' 0.5rem 0rem 0 0',
      }}
    >
      {searchResults.length > 0
        ? searchResults.map((video: any) => (
            <ListItem key={video.etag} video={video} />
          ))
        : videos.map((video: any) => <ListItem key={video.id} video={video} />)}
    </Box>
  );
};
export default VideoList;
