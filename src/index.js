import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef } from 'react';

import {Container, Nav, Navbar, Image, Button} from 'react-bootstrap';

import Section_1 from './Section_1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';

import ImgLogo from './images/logo-bookmark.svg';

const MainPage = () => {
  const parentRef = useRef(null)

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);   
    }
  }, [parentRef]);

  return (
    <main ref={parentRef}>
      <Navbar expand="lg" className="mt-5">
        <Container className=''>
          <Navbar.Brand href="#">
            <Image src={ImgLogo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsibleNavbar" className='' />
          <Navbar.Collapse id="collapsibleNavbar" className='cs-collapse mt-3'>
            <Nav className='ms-auto gap-4 justify-content-between align-items-center'>
              <Nav.Link className='cs-navlink cs-fw text-uppercase' href="#">Features</Nav.Link>
              <Nav.Link className='cs-navlink cs-fw text-uppercase' href="#">Pricing</Nav.Link>
              <Nav.Link className='cs-navlink cs-fw text-uppercase' href="#">Contact</Nav.Link>
              <Button variant='custom' className="cs-btn shadow text-uppercase">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
