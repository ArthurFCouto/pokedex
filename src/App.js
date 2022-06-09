import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import GlobalStyle from './config/styles';
import theme from './config/theme';
import './assets/css/animations.css';
import './assets/css/fonts.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
