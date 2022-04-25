import './App.css';
import React from 'react';
import Image from './Images/logo.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Forms/Form.js';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles.js';
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography variant='h2' align='center' className={classes.heading}>
          FindMe
        </Typography>
        <img src={Image} height="60"></img>
        <Grow in>
          <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
              <Grid item xs={12} sm={7}>
                <Posts />
                </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
                </Grid>
            </Grid>
          </Container>
        </Grow>
      </AppBar>
    </Container>
  );
}

export default App;
