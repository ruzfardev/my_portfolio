import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { Folder, Delete } from '@mui/icons-material';
import { Avatar, Box, IconButton, ListItemAvatar } from '@mui/material';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import { useParams } from 'react-router-dom';

const VideoList = () => {
  const { videos, searchResults } = useSelector((state: any) => state.videos);
  const { videoId } = useParams();
  return (
    <Box
      sx={{
        height: '80vh',
        overflowX: 'scroll',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: ' 0 1rem 0 0',
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
