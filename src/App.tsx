import React from 'react';
import './App.css';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import { Link} from 'react-router-dom';
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
                      </ul>
                  </Nav>
        </header>
          <Body>
              <Routes>
                  <Route path='/' element={<Home/>} />
              </Routes>
          </Body>
          </Container>
      </ThemeProvider>
  );
}

export default App;
