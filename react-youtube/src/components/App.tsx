import {
  Box,
  CircularProgress,
  createTheme,
  Grid,
  LinearProgress,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import VideoItem from './Video';
import { ThemeContext } from '../context/ThemeContext';
import { getVideosRequest } from '../reducers/videos';
import { getDesignTokens } from '../theme/theme';

function App() {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state: any) => state.videos);
  const [mode, setMode] = React.useState<PaletteMode>('dark');
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
    dispatch(getVideosRequest());
  }, [dispatch]);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme: setMode }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: 'background.default',
          }}
        >
          <Header />
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
                {videos.map((video: any) => (
                  <Grid width={350} item key={video.id}>
                    <VideoItem key={video.id} video={video} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
