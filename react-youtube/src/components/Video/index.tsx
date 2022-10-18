import React, { FC } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface Props {
  video: any;
}

const VideoItem: FC<Props> = (props) => {
  const { video } = props;
  return (
    <Card
      key={video.id}
      sx={{
        height: '230px',
      }}
    >
      <CardActionArea>
        <CardMedia
          draggable={false}
          component='img'
          height='160'
          image={video.snippet.thumbnails.medium.url}
        />
        <CardContent>
          <Typography
            variant='h6'
            sx={{
              fontSize: '0.7rem',
              lineHeight: '1em',
              height: '2em',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
            component='p'
          >
            {video.snippet.title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant='subtitle2'
              sx={{
                fontSize: '0.7rem',
                fontWeight: 400,
                color: 'text.secondary',
              }}
              component='p'
            >
              {video.snippet.channelTitle}
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
              {new Date(video.snippet.publishedAt).toDateString()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default VideoItem;
