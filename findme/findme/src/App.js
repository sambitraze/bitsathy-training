import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';
import Image from './Images/logo.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Forms/Form.js';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles.js';
function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={Image} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
