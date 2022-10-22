import { ThemeContext, ThemeProvider } from '@emotion/react';
import { Box, createTheme, PaletteMode } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { getDesignTokens } from '../../theme/theme';
import Header from '../Header';
const Main = () => {
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
  return (
    <>
      <ThemeContext.Provider value={{ theme: mode, toggleTheme: setMode }}>
        <ThemeProvider theme={theme}>
          <Box
            sx={
              {
                //   backgroundColor: 'background.default',
              }
            }
          >
            <Header />
            <Outlet />
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default Main;
