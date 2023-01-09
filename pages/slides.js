import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './slides.module.css';

const Slides = (props) => {
    const [introductionText, setIntroductionText] = useState("");
    const [introductionImage, setIntroductionImage] = useState("");

    const [problemText, setProblemText] = useState("");
    const [problemImage, setProblemImage] = useState("");

    const [solutionText, setSolutionText] = useState("");
    const [solutionImage, setSolutionImage] = useState("");

    const [competitionText, setCompetitionText] = useState("");
    const [competitionImage, setCompetitionImage] = useState("");

    const [productText, setProductText] = useState("");
    const [productImage, setProductImage] = useState("");

    const [revenueText, setRevenueText] = useState("");
    const [revenueImage, setRevenueImage] = useState("");

    const [thanksText, setThankstext] = useState("");
    const [thanksImage, setThanksImage] = useState("");

    const generateImg = () => {

    }
    const rephrase = async (slideText, slideName) => {
        const rephraseSlide = await fetch('/api/rephrased', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idea: props.idea, slideText: slideText }),
        });
        const rephrasedData = await rephraseSlide.json();
        switch (slideName) {
            case "introduction":
                setIntroductionText(rephrasedData);
                break;
            case "problem":
                setProblemText(rephrasedData);
                break;
            case "solution":
                setSolutionText(rephrasedData);
                break;
            case "competition":
                setProductText(rephrasedData);
                break;
            case "competition":
                setCompetitionText(rephrasedData);
                break;
            case "revenue":
                setRevenueText(rephrasedData);
                break;
            case "thanks":
                setThanksText(rephrasedData);
                break;
        }


    }
    useEffect(() => {
        // setIntroductionText(props.idea);
        // setProblemText(props.slides[0]);
        // setSolutionText(props.slides[1]);
        // setProductText(props.slides[2]);
        // setCompetitionText(props.slides[3]);
        // setRevenueText(props.slides[4]);
        // setThankstext(props.slides[5]);
    })
    return (
        <Carousel className={Classes.carousel}>
            <Carousel.Item>
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

                    <div className={Classes.generateBox}>
                        <div className="prompt-buttons">

                            <a className='generate-button' onClick={rephrase(introductionText,'introduction')}>
                                Rephrase Text of this Slide
                            </a>
                        </div>
                        <input type="text" placeholder="Type prompt to generate new image for this slide" />
                        <div className="prompt-buttons">
                            <a className='generate-button'>
                                Generate
                            </a>
                            
                        </div>
                    </div>
                </Container>
            </Carousel.Item>
            {/* <Carousel.Item>
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
                            <img className="img-fluid" src="https://media-public.canva.com/MADQ48WrPrg/1/screen_2x.jpg"></img>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className={Classes.slide3}>
                    <Row>
                        <Col md={6}>
                            <img src="https://media-public.canva.com/kcQAY/MAD7HtkcQAY/1/s3.jpg"></img>
                        </Col>
                        <Col md={6}>
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