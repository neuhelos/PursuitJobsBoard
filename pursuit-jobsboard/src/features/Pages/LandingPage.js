import React from "react";

import { makeStyles } from '@material-ui/core/styles'

import PublicNavBar from '../NavBar/PublicNavBar'
import SignInForm from '../Authentication/SignInForm'

import Grid from '@material-ui/core/Grid'

import PursuitYellowBackground from '../../assets/media/PursuitYellowBackground.png'


const useStyles = makeStyles ( (theme) => ({
      root: {
        height: '100%',
      },
      main: {
        backgroundImage: `url(${PursuitYellowBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: 1,
      }
  })
)

const LandingPage = () => {
    
  const classes = useStyles();


  return (

    <Grid className={classes.root} container item direction="column" wrap='nowrap'>
        <PublicNavBar  />
        <div className={classes.main}>
        <SignInForm />

        </div>
    </Grid>

  );
};

export default LandingPage;
