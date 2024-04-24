import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import {Button, Container, Form, Row, Col, Navbar, Nav, Image} from 'react-bootstrap';

import ImgLogo from './images/logo-2.svg';
import ImgFb from './images/icon-facebook.svg';
import ImgTw from './images/icon-twitter.svg';

const Footer = () => {
    return (
        <Container fluid id='s4' className='p-0 mt-5'>
            <SubSec />
            <FooterSec />
        </Container>
    );
};

const SubSec = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid className='p-5 d-flex flex-column align-items-center cs-bg-2'>
            <p className='cs-ls text-uppercase text-center text-light mb-4'>35,000+ already joined</p>
            <h4 className='h2 text-light w-75 text-center mb-4'>Stay up-to-date with what we’re doing</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='cs-w'>
                <Row>
                    <Col xs={12}
                         lg={7}
                         className={`p-0 mt-3 ${!validated ? '' : 'cs-error'}`}>
                        <Form.Control
                            type='email'
                            placeholder='Enter your email address'
                            className='cs-input border-0'
                            required
                        />
                        <Form.Control.Feedback type='invalid' className='text-white fst-italic mt-0'>
                            Whoops, make sure it's an email
                        </Form.Control.Feedback>
                    </Col>
                    <Col xs={12}
                         lg={1}>
                    </Col>
                    <Col xs={12}
                         lg={4} className='mt-3 p-0'>
                        <Button type='submit' variant='custom' className='cs-btn w-100 justify-self-end'>Contact Us</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

const FooterSec = () => {
    return (
        <Container fluid className='cs-bg-3 pt-3 pt-lg-0 pb-3 pb-lg-0'>
            <Navbar>
                <Container className='d-flex flex-column flex-lg-row align-items-center'>
                    <Navbar.Brand href="#" className='' >
                        <Image fluid src={ImgLogo} alt='logo' />
                    </Navbar.Brand>
                    <Nav className='d-flex flex-column flex-lg-row flex-grow-1 align-items-center'>
                        <Nav.Link className='cs-navlink-3 m-3 text-uppercase' href="#">Features</Nav.Link>
                        <Nav.Link className='cs-navlink-3 m-3 text-uppercase' href="#">Pricing</Nav.Link>
                        <Nav.Link className='cs-navlink-3 m-3 text-uppercase' href="#">Contact</Nav.Link>
                    </Nav>
                    <Nav className='d-flex flex-row align-items-center'>
                        <Navbar.Brand href='https://www.facebook.com/' target='_blank'>
                            <Image fluid src={ImgFb} alt='fblogo' className='cs-link' />
                        </Navbar.Brand>
                        <Navbar.Brand className='mx-auto' href='https://www.twitter.com/' target='_blank'>
                            <Image fluid src={ImgTw} alt='twlogo' className='cs-link' />
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Footer;