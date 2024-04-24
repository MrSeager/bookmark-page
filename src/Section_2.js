import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import autoAnimate from '@formkit/auto-animate';

import { useEffect, useRef } from 'react';
import {Container, Nav, Image, Button, Row, Col} from 'react-bootstrap';

import ImgIll_1 from './images/illustration-features-tab-1.svg';
import ImgIll_2 from './images/illustration-features-tab-2.svg';
import ImgIll_3 from './images/illustration-features-tab-3.svg';

const Section_2 = () => {
    const [activeLink, setActiveLink] = useState('Bookmark');
    const parentRef = useRef(null)

    useEffect(() => {
        if (parentRef.current) {
        autoAnimate(parentRef.current);   
        }
    }, [parentRef]);

    return (
        <Container id='s2' className='mt-5 mb-5'>
            <h2 className='display-5 cs-fw text-center mb-3'>Features</h2>
            <p className='text-center cs-c cs-fw mb-5 w-75 mx-auto'>Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.</p>
            <Container ref={parentRef}>
                <Nav variant="tabs" defaultActiveKey="link-1" className='flex-lg-row flex-column align-items-center border-0 w-50 mx-auto justify-content-around mb-5'>
                    <Nav.Item >
                        <Nav.Link eventKey='link-1' className='cs-navlink-2 pb-4 text-center' onClick={() => setActiveLink('Bookmark')}>Simple Bookmarking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='link-2' className='cs-navlink-2 pb-4 text-center' onClick={() => setActiveLink('Search')}>Speedy Searching</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='link-3' className='cs-navlink-2 pb-4 text-center' onClick={() => setActiveLink('Sharing')}>Easy Sharing</Nav.Link>
                    </Nav.Item>
                </Nav>
                {activeLink === 'Bookmark' && <Bookmark />}
                {activeLink === 'Search' && <Search />}
                {activeLink === 'Sharing' && <Sharing />}
            </Container>
        </Container>
    );
};

const Bookmark = () => {
    return (
        <Row>
            <Col xs={12}
                 lg={6} className='cs-b-2 mb-5'>
                <Image fluid src={ImgIll_1} alt='IllTab' className='d-block mx-auto' />
            </Col>
            <Col xs={12}
                 lg={6} className='d-flex flex-column justify-content-start align-items-center align-items-lg-start mb-5 mt-5 text-center text-lg-start'>
                <h3 className='h2 mb-3 mt-3'>Bookmark in one click</h3>
                <p className='cs-c cs-fw mb-4 w-75'>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.</p>
                <Button variant='custom' className='cs-btn-ch shadow'>More Info</Button>
            </Col>
        </Row>
    );
};

const Search = () => {
    return (
        <Row>
            <Col xs={12}
                 lg={6} className='cs-b-2 mb-5'>
                <Image fluid src={ImgIll_2} alt='IllTab' className='d-block mx-auto' />
            </Col>
            <Col xs={12}
                 lg={6} className='d-flex flex-column justify-content-start align-items-center align-items-lg-start mb-5 mt-5 text-center text-lg-start'>
                <h3 className='h2 mb-3 mt-4 mt-lg-3'>Intelligent search</h3>
                <p className='cs-c cs-fw mb-4 w-75'>Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.</p>
                <Button variant='custom' className='cs-btn-ch shadow align-self-center align-self-lg-start'>More Info</Button>
            </Col>
        </Row>
    );
};

const Sharing = () => {
    return (
        <Row>
            <Col xs={12}
                 lg={6} className='cs-b-2 mb-5'>
                <Image fluid src={ImgIll_3} alt='IllTab' className='d-block mx-auto' />
            </Col>
            <Col xs={12}
                 lg={6} className='d-flex flex-column justify-content-start align-items-center align-items-lg-start mb-5 mt-5 text-center text-lg-start'>
                <h3 className='h2 mb-3 mt-3'>Share your bookmarks</h3>
                <p className='cs-c cs-fw mb-4 w-75'>Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.</p>
                <Button variant='custom' className='cs-btn-ch shadow'>More Info</Button>
            </Col>
        </Row>
    );
};

export default Section_2;