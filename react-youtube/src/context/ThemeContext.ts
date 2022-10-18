import { PaletteMode } from '@mui/material';
import { createContext } from 'react';
export const ThemeContext = createContext<{
  theme: PaletteMode;
  toggleTheme: (theme: PaletteMode) => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});
