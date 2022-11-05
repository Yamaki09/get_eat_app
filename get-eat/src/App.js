import React, { useState } from 'react';
import AllList from './components/AllList';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Registration from './components/Registration';
import SingleList from './components/SingleList/SingleList';
import Container from 'react-bootstrap/Container';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

export default function App() {
  const [listid, setListid] = useState(null);
  return (
    <>
      {/* this imports the default css for bootstrap 
      it is required for things like striped bordered hover variant="dark" */}
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
        integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi'
        crossorigin='anonymous'
      />
      <Container fluid>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/registration' element={<Registration />} />
          <Route exact path='/login' element={<Login />} />
          <Route
            exact
            path='/single-list'
            element={<SingleList listid={listid} />}
          />
          <Route
            exact
            path='/all-list'
            element={<AllList setListid={setListid} />}
          />
        </Routes>
      </Container>
    </>
  );
}
