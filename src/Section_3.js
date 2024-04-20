import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import {Container, Nav, Navbar, Image, Button, Row, Col, Card} from 'react-bootstrap';

import ImgCh from './images/logo-chrome.svg';
import ImgFf from './images/logo-firefox.svg';
import ImgOp from './images/logo-opera.svg';

const Section_3 = () => {
    return (
        <Container id='s3' className='mb-5 mt-5 pt-5 text-center'>
            <h4 className='h2'>Download the extension</h4>
            <p className='cs-fw cs-c w-50 mx-auto mb-5'>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
            <Row>
                <Col>
                </Col>
                <Col xs={12}
                     lg={3}>
                    <Card className='border-0 shadow align-items-center pt-3 pb-3 mb-4'>
                        <Card.Img fluid variant="top" src={ImgCh} alt="logo" className='w-50 mb-3' />
                        <Card.Body className='mb-4 cs-br w-100'>
                            <Card.Title>Add to Chrome</Card.Title>
                            <Card.Text className='cs-c cs-fw mb-4'>Minimum version 62</Card.Text>
                        </Card.Body>
                        <Button variant='custom' className='cs-btn-ch w-75 h-100'>Add & Install Extension</Button>
                    </Card>
                </Col>
                <Col xs={12}
                     lg={3}>
                    <Card className='border-0 shadow align-items-center pt-3 pb-3 mb-4 mt-4'>
                        <Card.Img fluid variant="top" src={ImgFf} alt="logo" className='w-50 mb-4' />
                        <Card.Body className='mb-4 cs-br w-100'>
                            <Card.Title>Add to Firefox</Card.Title>
                            <Card.Text className='cs-c cs-fw mb-4'>Minimum version 55</Card.Text>
                        </Card.Body>
                        <Button variant='custom' className='cs-btn-ch w-75 h-100'>Add & Install Extension</Button>
                    </Card>
                </Col>
                <Col xs={12}
                     lg={3}>
                    <Card className='border-0 shadow align-items-center pt-3 pb-3 mb-4 mt-3 mt-lg-5'>
                        <Card.Img fluid variant="top" src={ImgOp} alt="logo" className='w-50 mb-3' />
                        <Card.Body className='mb-4 cs-br w-100'>
                            <Card.Title>Add to Opera</Card.Title>
                            <Card.Text className='cs-c cs-fw mb-4'>Minimum version 46</Card.Text>
                        </Card.Body>
                        <Button variant='custom' className='cs-btn-ch w-75 h-100'>Add & Install Extension</Button>
                    </Card>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Section_3;