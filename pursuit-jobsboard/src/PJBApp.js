import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'

import firebase from './utilitron/firebase'
import { setCurrentUser } from './features/Authentication/authenticationSlice'
import { getFirebaseIdToken } from './utilitron/firebaseFunctions'
import { useScript } from './utilitron/CustomHookery'

import GlobalStyle from './styling/GlobalStyle'
import LandingPage from './features/Pages/LandingPage'
import NavBar from './features/NavBar/Navbar'
import JobsBoard from './features/Pages/JobsBoard'
import Profile from './features/Profile/Profile'
import { PublicRoute, ProtectedRoute } from './utilitron/AuthRouting'

import { theme } from './styling/theme'
import { ModalOverlay } from './styling/ModalOverlay'

const PJBApp = () => {

  const currentUser = useSelector( state => state.currentUserSession )

  const dispatch = useDispatch()

  const userSession = user => {
    if(user) {
        const {email, uid} = user
        getFirebaseIdToken().then(token => {
            dispatch(setCurrentUser({email, uid, token}))
        })
    } else {
        dispatch(setCurrentUser(null))
    }
  };

  useEffect( () => {
      const authStateObserver = firebase.auth().onAuthStateChanged(userSession)
      return authStateObserver
  }, []);


  const { REACT_APP_GOOGLEMAPS_APIKEY } = process.env
  const [googleMapsAPIScriptLoaded, googleMapsAPIScriptError] = useScript(`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLEMAPS_APIKEY}&libraries=places`)
  
  //Heroku

  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider backgroundComponent={ModalOverlay}>
        { currentUser ? <NavBar /> : null }
        <Switch>
          <PublicRoute exact path="/">
            <LandingPage />
          </PublicRoute>
          <ProtectedRoute path="/jobboard">
            <JobsBoard />
          </ProtectedRoute>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
        </Switch>
      </ModalProvider>
    </ThemeProvider>

  )
}

export default PJBApp;
