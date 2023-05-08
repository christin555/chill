import React from 'react';
import './App.css';
import Home from './components/home';
import Dates from './components/dates';
import Anim from './components/anim';
import TSView from './components/TSView';
import {Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import theme from "./components/shared/theme";
import {ThemeProvider} from "styled-components";
import {Container, Nav, Body} from "./components/shared/StyledElements";


function App() {
  return (
      <ThemeProvider theme={theme}>
          <Container>
              <header>
                  <Nav>
                      <ul>
                          <li>
                              <Link to='/'>Home</Link>
                          </li>
                          <li>
                              <Link to='/dates'>Dates</Link>
                          </li>
                          <li>
                              <Link to='/anim'>Anim</Link>
                          </li>
                          <li>
                              <Link to='/ts'>TS</Link>
                          </li>
                      </ul>
                  </Nav>
        </header>
          <Body>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/dates' element={<Dates/>} />
                  <Route path='/anim' element={<Anim/>} />
                  <Route path='/ts' element={<TSView/>} />
              </Routes>
          </Body>
          </Container>
      </ThemeProvider>
  );
}

export default App;
