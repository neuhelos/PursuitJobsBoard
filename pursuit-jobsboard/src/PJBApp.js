import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from "./features/BaseComponents/GlobalStyle"
import LandingPage from "./features/LandingPage.js/LandingPage"


const App = () => {

  const theme = {
  
  }



  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LandingPage />
    </ThemeProvider>
  );
}

export default App;
