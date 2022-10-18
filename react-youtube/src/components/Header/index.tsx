import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import { MaterialUISwitch } from '../Switch/style';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { Container } from '@mui/system';
export default function SearchAppBar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ display: 'flex', gap: '0.5rem' }}>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
            <YouTubeIcon
              color={theme === 'dark' ? 'error' : 'inherit'}
              fontSize='large'
            />
          </IconButton>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, textAlign: 'left' }}
            component='div'
          >
            ReacTube
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search
              sx={{
                flexGrow: 1,
                justifySelf: 'flex-end',
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <MaterialUISwitch
              onChange={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              sx={{ m: 1 }}
              defaultChecked
              theme={theme}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
