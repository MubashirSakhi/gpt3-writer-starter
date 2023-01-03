import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './slides.module.css';

const Slides = (props) => {
    return (
        <Carousel className={Classes.carousel}>
            {/* <Carousel.Item>
                <Container className={Classes.slide1}>
                    <Row className={Classes.row}>
                        <Col md={5}>
                            <div className={Classes.upper}>
                                <h1>Startup</h1>
                                <h2>Pitch Deck</h2>
                            </div>
                            <div className={Classes.down}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </Col>
                        <Col md={7}>
                           
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item> */}
            <Carousel.Item>
                <Container className={Classes.slide2}>
                    <Row className={Classes.row}>
                        <Col md={6}>
                            <div className={[Classes.numbering, Classes.upper].join(" ")}>
                                <h1>01</h1>
                            </div>
                            <div className={Classes.down}>
                                <h3>Introduction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src="https://media-public.canva.com/MADQ48WrPrg/1/screen_2x.jpg"></img>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            {/*<Carousel.Item>
                <Container className={Classes.slide3}>
                    <Row>
                        <Col md={5}>
                            <img src="https://media-public.canva.com/kcQAY/MAD7HtkcQAY/1/s3.jpg"></img>
                        </Col>
                        <Col md={7}>
                            <div className={Classes.numbering}>
                                <h1>02</h1>
                            </div>
                            <div>
                                <h3>Problem</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className={Classes.slide4}>
                    <Row>
                        <Col md={6}>
                            <div className={Classes.numbering}>
                                <h1 >03</h1>
                            </div>
                        </Col>
                        <Col md={6}>

                            <div>
                                <h3>Solution</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className={Classes.slide5} >
                    <Row>
                        <Col md={5} className="MarketImages">
                            <Row>
                                <Col md={6}>
                                    <img src="/icon0.png"></img>
                                </Col>
                                <Col md={6}>
                                    <img src="/icon1.png"></img>
                                </Col>
                                <Col md={6}>
                                    <img src="/icon2.png"></img>
                                </Col>
                                <Col md={6}>
                                    <img src="/icon3.png"></img>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <div className={Classes.numbering}>
                                <h1 >04</h1>
                            </div>
                            <div>
                                <h3>Market Competition</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className={Classes.slide6}>
                    <Row>
                        <img src="https://media-public.canva.com/MADGx9dqdxU/4/screen_2x.jpg"></img>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className={Classes.numbering}>
                                <h1  >05</h1>
                            </div>
                        </Col>
                        <Col md={6}>

                            <div>
                                <h3>Revenue Model</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className={Classes.slide7}>
                    <Row>
                        <Col md={4}>
                            <div className={Classes.numbering}>
                                
                            </div>
                        </Col>
                        <Col md={8}>
                            <div>
                                <h1>Thank You</h1>
                                <h2>For Listening</h2>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </Carousel.Item> */}
        </Carousel>
    )
}
export default Slides;