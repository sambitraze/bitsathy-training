import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getPosts } from './actions/posts';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import { Container} from '@material-ui/core';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
  return (
    <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/auth" exact element={<Auth />} />        
        <Route path="/posts" exact element={<Home />} />
        <Route path="/posts/search" exact element={<Home />} />
        <Route path="/posts/:id" exact element={<PostDetails />} />
        <Route path="/" exact element={<Navigate replace to="/posts" />} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
