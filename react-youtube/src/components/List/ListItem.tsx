import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Icon } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { PlayArrow } from '@mui/icons-material';

type Props = {
  video: any;
};
const ListItem = ({ video }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { videoId } = useParams();
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon color='error'>
          {typeof video.id === 'object' ? (
            video.id.videoId !== videoId
          ) : video.id !== videoId ? null : (
            <PlayArrow />
          )}
        </Icon>
      </Box>

      <CardActionArea
        onClick={() =>
          navigate(
            `/${typeof video.id === 'object' ? video.id.videoId : video.id}`
          )
        }
      >
        <Card sx={{ display: 'flex' }} draggable={false}>
          <CardMedia
            component='img'
            sx={{ width: 151 }}
            image={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '0.7rem',
                  lineHeight: '1em',
                  height: '2em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                component='p'
              >
                {video.snippet.title}
              </Typography>
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
            </CardContent>
          </Box>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default ListItem;
