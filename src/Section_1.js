import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import {Container, Nav, Navbar, Image, Button, Row, Col} from 'react-bootstrap';

import ImgSec_1 from './images/illustration-hero.svg';

const Section_1 = () => {
    return (
        <Container id='s1' className='mt-5'>
            <Row>
                <Col xs={{span: 12, order: 3}}
                     lg={{span: 5, order: 1}}
                     className='d-flex flex-column justify-content-center mb-5'>
                    <h1 className='display-4 cs-fw mb-3 text-center text-lg-start'>A Simple Boolmark Manager</h1>
                    <p className='mb-3 cs-fw cs-c text-center text-lg-start'>A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='d-flex flex-row justify-content-center justify-content-lg-start'>
                        <Button variant='custom' className='cs-btn-ch shadow'>Get it on Chrome</Button>
                        <Button variant='custom' className='cs-btn-ff ms-3 shadow'>Get it on Firefox</Button>
                    </div>
                </Col>
                <Col xs={{span: 12, order: 2}}
                     lg={{span: 2, order: 2}}></Col>
                <Col xs={{span: 12, order: 1}}
                     lg={{span: 5, order: 3}} className='cs-bg mb-5'>
                    <Image fluid src={ImgSec_1} alt='illustration' className='' />
                </Col>
            </Row>
        </Container>
    );
};

export default Section_1;