import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from "./features/BaseComponents/GlobalStyle"
import LandingPage from "./features/LandingPage.js/LandingPage"
import JobBoard from "./features/JobBoard/JobBoard"
import Profile from "./features/Profile/Profile"
import { ProtectedRoute } from "./utilitron/authRouting"


const PJBApp = () => {

  const theme = {
  
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" >
          <LandingPage />
        </Route>
        <ProtectedRoute path="/jobboard" >
          <JobBoard />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
      </Switch>
    </ThemeProvider>
  );
}

export default PJBApp;
