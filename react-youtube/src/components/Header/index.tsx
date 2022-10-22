import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { getSearchRequest } from '../../reducers/videos';
export default function SearchAppBar() {
  const dispatch = useDispatch();
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [term, setTerm] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getSearchRequest(term));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
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
              <form onSubmit={handleSubmit}>
                <StyledInputBase
                  placeholder='Search…'
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTerm(e.target.value)
                  }
                />
              </form>
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
