import {
  Box,
  Grid,
  LinearProgress,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import VideoItem from './Video/VideoItem';
import { getVideosRequest, setselectedVideo } from '../reducers/videos';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { getDesignTokens } from '../theme/theme';
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { videos, searchResults, loading, error } = useSelector(
    (state: any) => state.videos
  );
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  useEffect(() => {
    videos.length === 0 && dispatch(getVideosRequest());
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme: setMode }}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='xl'
          sx={{
            paddingTop: '6rem',
          }}
        >
          {error && <h1>{error}</h1>}
          {loading ? (
            <Box
              sx={{
                width: '100%',
              }}
            >
              <LinearProgress color='error' />
            </Box>
          ) : (
            <Grid container columnGap={2} rowGap={2}>
              {searchResults.length > 0
                ? searchResults.map((video: any) => (
                    <Grid
                      width={350}
                      item
                      key={video.etag}
                      onClick={() => {
                        dispatch(setselectedVideo(video));
                        navigate(`/${video.id.videoId}`);
                      }}
                    >
                      <VideoItem key={video.etag} video={video} />
                    </Grid>
                  ))
                : videos.map((video: any) => (
                    <Grid
                      width={350}
                      item
                      key={video.id}
                      onClick={() => {
                        dispatch(setselectedVideo(video));
                        navigate(`/${video.id}`);
                      }}
                    >
                      <VideoItem key={video.id} video={video} />
                    </Grid>
                  ))}
            </Grid>
          )}
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
