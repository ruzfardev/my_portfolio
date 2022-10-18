import { Routes, Route } from 'react-router-dom';
import App from '../components/App';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routing;

// Path: react-youtube/src/routes/root.tsx
// Compare this snippet from react-youtube/src/components/Header.tsx:
// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   InputBase,
//   Toolbar,
//   Typography,
// } from '@mui/material';
// import { alpha } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import { ThemeContext } from '../context/ThemeContext';
// import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
//
// const Header = () => {
//   const history = useHistory();
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const themeMode = createTheme({
//     palette: {
//       mode: theme,
//     },
//   });
//   return (
//     <ThemeProvider theme={themeMode}>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position='static'>
//           <Toolbar>
//             <IconButton
//               size='large'
//               edge='start'
//               color='inherit'
//               aria-label='menu'
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant='h6'
//               component='div'
//               sx={{ flexGrow: 1 }}
//               onClick={() => history.push('/')}
//             >
//               React Youtube
//             </Typography>
//             <Button
//               color='inherit'
//               onClick={() => history.push('/about')}
//               sx={{ mr: 2 }}
//             >
//               About
//             </Button>
//             <Button
//               color='inherit'
//               onClick={() => history.push('/contact')}
//               sx={{ mr: 2 }}
//             >
//               Contact
//             </Button>
//             <Button
//
