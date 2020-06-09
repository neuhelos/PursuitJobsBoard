import React from 'react';
import { ThemeProvider } from 'styled-components'

import LandingPage from "./features/Authentication/LandingPage"

const theme = {

}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <LandingPage />
      </>
    </ThemeProvider>
  );
}

export default App;
