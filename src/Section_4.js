import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import {Container, Accordion, Button} from 'react-bootstrap';

const Section_4 = () => {
    return (
        <Container id='s4' className='mb-5 mt-5 d-flex flex-column align-items-center'>
            <h4 className='h2'>Frequently Asked Questions</h4>
            <p className='w-50 mt-4 mb-5 text-center cs-c cs-fw'>Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.</p>
            <Accordion flush defaultActiveKey='0' className='w-50 mb-5 cs-b cs-bt'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is Bookmark?</Accordion.Header>
                    <Accordion.Body className='cs-c mt-3 mb-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I request a new browser?</Accordion.Header>
                    <Accordion.Body className='cs-c  mt-3 mb-3'>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Is there a mobile app?</Accordion.Header>
                    <Accordion.Body className='cs-c  mt-3 mb-3'>
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What about other Chromium browsers?</Accordion.Header>
                    <Accordion.Body className='cs-c  mt-3 mb-3'>
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button variant='custom' className='cs-btn-ch'>More Info</Button>
        </Container>
    );
};

export default Section_4;