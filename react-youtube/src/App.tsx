import {
  CircularProgress,
  createTheme,
  Grid,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SearchAppBar from './components/Header';
import VideoItem from './components/Video';
import { ThemeContext } from './context/ThemeContext';
import { getVideosRequest } from './reducers/videos';
import { getDesignTokens } from './theme/theme';

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
        <div className='App'>
          <SearchAppBar />
          <Container maxWidth='xl'>
            <h1>React Youtube</h1>
            {error && <h1>{error}</h1>}
            {loading ? (
              <CircularProgress />
            ) : (
              <Grid container columnGap={2} rowGap={2}>
                {videos.map((video: any) => (
                  <Grid width={350} maxHeight={200} item>
                    <VideoItem key={video.id} video={video} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
