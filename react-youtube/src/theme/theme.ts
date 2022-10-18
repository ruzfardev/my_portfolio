import { PaletteMode } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            light: '#333',
            main: '#222',
            dark: '#000',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#ba000d',
            dark: '#ba000d',
            contrastText: '#000',
          },
        }
      : {
          primary: {
            light: '#ff7',
            main: '#f00',
            dark: '#f00',
            contrastText: '#fff',
          },
        }),
  },
});
