import React from 'react';
import AllList from './components/AllList';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import SingleList from './components/SingleList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      {/* this imports the default css for bootstrap 
      it is required for things like striped bordered hover variant="dark" */}
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
        integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi'
        crossorigin='anonymous'
      />
      <Container fluid>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/single-list' element={<SingleList />} />
          <Route path='/all-list' element={<AllList />} />
        </Routes>
      </Container>
    </Router>
  );
}
