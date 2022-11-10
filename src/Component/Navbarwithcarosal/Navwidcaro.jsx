import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './Navwidcaro.module.css'
import Button from 'react-bootstrap/Button';

function Navwidcaro() {
    return (
        <div className={style.mainconatiner}>
            <div className={style.navbarcontainer}>
                <Navbar expand="lg" className={style.navbarcontainer}>
                    <Container>
                        <Navbar.Brand href="#HOME" className={style.logo} >PIXELS.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={style.sublist}>
                                <Nav.Link href="#HOME" className={style.sublista}>HOME</Nav.Link>
                                <Nav.Link href="#ABOUT" className={style.sublista}>ABOUT</Nav.Link>
                                <Nav.Link href="#PORTFOLIO" className={style.sublista}>PORTFOLIO</Nav.Link>
                                <Nav.Link href="#CONTACT" className={style.sublista}>CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className={style.carosalcontainer}>
                <Carousel className={style.carosalcontainer}>
                    <Carousel.Item interval={1000}>
                        <img className={style.caroimage} src="https://uicookies.com/demo/theme/pixels/img/slider_1.jpg" alt="First slide" />
                        <Carousel.Caption className={style.caption}>
                            <h3>WE ARE CREATIVE AGENCY</h3>
                            <p>A new website template by uicookies.com under license Creative Commons 3.0</p>
                            <Button className={style.button}>Download This Template</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className={style.caroimage} src="https://uicookies.com/demo/theme/pixels/img/slider_5.jpg" alt="Second slide" />
                        <Carousel.Caption className={style.caption}>
                            <h3>AWARD WINNING AGENCY</h3>
                            <p>A new website template by uicookies.com under license Creative Commons 3.0</p>
                            <Button className={style.button}>Download Template</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Navwidcaro