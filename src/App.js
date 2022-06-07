import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import config from './config';
import GlobalStyle from './config/styles';
import './assets/css/animations.css';
import './assets/css/fonts.css';

const theme = config.theme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider >
  );
}

export default App;
