import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import {Container, Form} from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid id='s4' className='mb-5 mt-5'>
            <SubSec />
            <FooterSec />
        </Container>
    );
};

const SubSec = () => {
    return (
        <Container fluid className='p-5 d-flex flex-column align-items-center cs-bg-2'>
            <h3 className='h6 text-light'>35,000+ already joined</h3>
            <h4 className='h3 text-light w-25 text-center'>Stay up-to-date with what we’re doing</h4>
            <Form>

            </Form>
        </Container>
    );
};

const FooterSec = () => {
    return (
        <Container fluid className='cs-bg-3'>
            footer
        </Container>
    );
};

export default Footer;