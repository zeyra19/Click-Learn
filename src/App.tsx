import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
