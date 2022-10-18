import React, { FC } from 'react';
import {
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
    <Card key={video.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={video.snippet.thumbnails.medium.url}
        />
        <CardContent>
          <Typography fontSize={'12px'}>{video.snippet.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default VideoItem;
